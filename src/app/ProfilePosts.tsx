import {getSortedPostsData} from '@/lib/posts';
import {AppConfig} from '@/config/app.config';
import {FiLink, FiShare} from 'react-icons/fi';

export default function ProfilePosts() {
  const allPosts = getSortedPostsData();
  return <div className={'flex flex-col divide-y pb-8'}>
    {allPosts.map(post => (
      <div className={'bg-white'}>
        <div className={'flex flex-row gap-2 items-center p-4 pb-0'}>
          <div
            className={'overflow-hidden rounded-full w-14 aspect-square bg-cover bg-center border-2 border-white'}
            style={{
              backgroundImage: `url('${AppConfig.avatar.src}')`
            }}
          />
          <div className={'flex flex-col'}>
            <div className={'font-semibold'}>
              {AppConfig.name}
            </div>
            <div className={'text-[12px] text-neutral-500'}>
              @{AppConfig.username}
            </div>
          </div>
        </div>
        <div className={'mt-4 text-[14px]'}>
          <a href={`/blog/${post.slug}/`} className={'block px-4 pb-4'}>
            <div className={'font-bold'}>
              {post.title}
            </div>
            <div className={'text-neutral-500 line-clamp-2'}>
              {post.summary}
            </div>
          </a>
          <div className={'flex flex-row'}>
            {post.images && (
              <div>
                <img
                  src={post.images[0]} alt={post.title}
                  className={'aspect-video'}
                />
              </div>
            )}
          </div>
          <div className={'text-[12px] text-neutral-500 px-4 py-2 flex flex-row justify-between'}>
            <div className={'flex flex-row gap-4'}>
              <div className={'flex flex-row gap-1 items-center cursor-pointer hover:text-neutral-900'}>
                <FiShare/> Share
              </div>
              <div className={'flex flex-row gap-1 items-center cursor-pointer hover:text-neutral-900'}>
                <FiLink/> Copy Link
              </div>
            </div>
            <div className={''}>
              {post.date}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>;
}
