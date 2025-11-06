import AppLayout from '@/components/AppLayout';
import {getPostData} from '@/lib/posts';
import {FiArrowLeft} from 'react-icons/fi';
import Script from 'next/script';
import {AppConfig} from '@/config/app.config';
import PostPictures from '@/app/blog/[slug]/PostPictures';
import Markdown from 'react-markdown';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import lua from 'react-syntax-highlighter/dist/cjs/languages/prism/lua';
import CopyCodeButton from '@/app/blog/[slug]/CopyCodeButton';
import {Metadata} from 'next';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('lua', lua);

interface PostContentProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  {params}: PostContentProps,
): Promise<Metadata> {
  const slug = (await params).slug;
  const post = await getPostData(slug);

  return {
    title: post.title,
    description: post.summary,
    publisher: AppConfig.name,
    openGraph: {
      images: post.images ?? [],
    },
  };
}

export default async function PostContent({params}: PostContentProps) {
  const slug = (await params).slug;
  const post = await getPostData(slug);
  return <AppLayout>
    <div className={'p-4 bg-white border-b w-full'}>
      <a href={'/'} className={'flex flex-row gap-1 items-center text-[12px] mb-4 cursor-pointer hover:text-primary'}>
        <FiArrowLeft/> Go Back
      </a>
      <div className={'font-bold text-xl'}>
        {post.title}
      </div>
      <div className={'text-[12px] text-neutral-600 mt-2'}>
        {post.summary}
      </div>
    </div>
    <div className={'w-full'}>
      <PostPictures post={post}/>
    </div>
    <Markdown
      className={'text-[14px] bg-white p-4 my-4 border-y leading-relaxed post-content'}
      components={{
        code({inline, className, ...props}) {
          const hasLang = /language-(\w+)/.exec(className || '');
          return !inline && hasLang ? (
            <SyntaxHighlighter
              style={darcula}
              language={hasLang[1]}
              PreTag="div"
              className="mockup-code scrollbar-thin scrollbar-track-base-content/5 scrollbar-thumb-base-content/40 scrollbar-track-rounded-md scrollbar-thumb-rounded text-[14px] rounded-lg"
              showLineNumbers={true}
              useInlineStyles={true}
            >
              {String(props.children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props} />
          );
        },
        pre(pre) {
          const code = (pre as any).node.children[0].children[0].value as string;
          return <div className="relative">
            <CopyCodeButton code={code}/>
            <pre {...pre}></pre>
          </div>;
        }
      }}
    >
      {post.content}
    </Markdown>
    {/* {AppConfig.giscusEnabled && (
      <>
        <div className={'border-t bg-white p-4'}>
          <div className={'giscus'}></div>
        </div>
        <Script
          src="https://giscus.app/client.js"
          data-repo="monokaijs/onlyfans-profile"
          data-repo-id="R_kgDONcB6-A"
          data-category="General"
          data-category-id="DIC_kwDONcB6-M4ClJOr"
          data-mapping="pathname"
          data-strict="0"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="bottom"
          data-theme="light"
          data-lang="en"
          async
        />
      </>
    )} */}
  </AppLayout>;
}
