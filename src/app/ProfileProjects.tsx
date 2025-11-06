'use client';

import {useEffect, useState} from 'react';
import {AppConfig} from '@/config/app.config';
import {FiAlertTriangle, FiChevronDown, FiGitBranch, FiStar} from 'react-icons/fi';
import {cn} from '@/lib/utils/cn';
import Markdown from 'react-markdown';

function ProjectItem({project}: {project: any}) {
  const [showReadme, setShowReadme] = useState(false);
  const [readme, setReadme] = useState<string>('');
  const [readmeLoaded, setReadmeLoaded] = useState(false);

  useEffect(() => {
    if (showReadme && !readmeLoaded) {
      const loadReadme = async () => {
        try {
          const res = await fetch(project.url + '/readme');
          const data = await res.json();
          console.log('readme meta:', data);

          // Prefer raw download_url if provided (avoids base64 decoding)
          if (data.download_url) {
            try {
              // Do a HEAD request to check Content-Length before downloading large files
              let sizeOk = true;
              try {
                const head = await fetch(data.download_url, { method: 'HEAD' });
                const len = head.headers.get('content-length');
                if (len && Number(len) > 500 * 1024) { // 500 KB limit
                  setReadme('Readme content is too large to display');
                  sizeOk = false;
                }
              } catch (headErr) {
                // If HEAD fails, we'll still try but protect with a hard character limit after download
                console.warn('HEAD request failed for readme download_url, falling back to small-size guard', headErr);
              }

              if (sizeOk) {
                const txtRes = await fetch(data.download_url);
                if (!txtRes.ok) {
                  setReadme('Error fetching readme');
                } else {
                  const text = await txtRes.text();
                  if (text.length > 2 * 1024 * 1024) { // extra guard: 2MB after decode
                    setReadme('Readme content is too large to display');
                  } else {
                    setReadme(text || 'No readme provided.');
                  }
                }
              }
            } catch (dlErr) {
              console.error('Error downloading readme via download_url:', dlErr);
              setReadme('Error loading readme');
            }
          } else if (data.content) {
            // Fallback: GitHub API returned base64 content. Guard by encoded length first.
            if (data.content.length > 10 * 1024 * 1024) { // encoded size > 10MB
              setReadme('Readme content is too large to display');
            } else {
              try {
                setReadme(atob(data.content));
              } catch (decErr) {
                console.error('Error decoding base64 readme:', decErr);
                setReadme('Error loading readme: invalid content');
              }
            }
          } else {
            setReadme('No readme provided.');
          }
        } catch (err) {
          console.error('Failed to load readme:', err);
          setReadme('Error loading readme');
        } finally {
          setReadmeLoaded(true);
        }
      };

      loadReadme();
    }
  }, [showReadme]);

  return <div key={project.id} className={'bg-white border-neutral-200 p-4'}>
    <div className={'flex flex-row justify-between'}>
      <a href={project.html_url} className={'font-bold text-[15px] hover:text-primary'} rel="noopener noreferrer">
        {project.name}
      </a>
      <div className={'font-semibold text-[12px]'}>
        {new Date(project.updated_at).getFullYear()}
      </div>
    </div>
    <p className={'text-neutral-500 text-[12px]'}>{project.description || 'No description provided.'}</p>
    <div className={'flex flex-row justify-between items-center'}>
      <div className={'text-neutral-500 font-semibold text-[14px] flex flex-row gap-3 mt-4'}>
        <div className={'flex flex-row items-center gap-1'}>
          <FiStar/> {project.stargazers_count}
        </div>
        <div className={'flex flex-row items-center gap-1'}>
          <FiGitBranch/> {project.forks_count}
        </div>
        <div className={'flex flex-row items-center gap-1'}>
          <FiAlertTriangle/> {project.open_issues}
        </div>
      </div>
      <div
        className={'flex flex-row text-[12px] text-neutral-500 items-center gap-1 cursor-pointer transition-all duration-300 hover:bg-primary hover:text-white rounded-full py-0.5 pl-1 pr-2 -mr-2'}
        onClick={() => setShowReadme(!showReadme)}
      >
        <FiChevronDown className={cn(
          'transition-transform duration-300',
          showReadme ? 'rotate-180' : ''
        )}/> Preview
      </div>
    </div>
    {showReadme && (
      <div className={'text-[12px] bg-neutral-100 mt-4 p-4 rounded-lg'}>
        <Markdown>{readme}</Markdown>
      </div>
    )}
  </div>
}

export default function ProfileProjects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const username = AppConfig.username;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&direction=desc`
        );
        if (!response.ok) {
          throw new Error(`Error fetching projects: ${response.statusText}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {projects.length === 0 ? (
        <p>No repositories found.</p>
      ) : (
        <div className={'flex flex-col divide-y'}>
          {projects.map((project) => {
            return <ProjectItem project={project} key={project.id}/>;
          })}
        </div>
      )}
    </div>
  );
}
