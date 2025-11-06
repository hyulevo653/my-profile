'use client';

import { AppConfig } from '@/config/app.config';
import { FiLink, FiShare } from 'react-icons/fi';
import { useState } from 'react';

type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  images?: string[];
};

export default function ClientProfilePosts({ initialPosts }: { initialPosts: Post[] }) {
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const handleCopyLink = async (slug: string) => {
    const url = `${window.location.origin}/blog/${slug}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedSlug(slug);
      setTimeout(() => setCopiedSlug(null), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
      alert('Copy thất bại. Vui lòng kiểm tra quyền clipboard hoặc dùng HTTPS.');
    }
  };

  const handleShare = async (post: Post) => {
    const url = `${window.location.origin}/blog/${post.slug}`;
    const shareData = {
      title: post.title,
      text: post.summary,
      url,
    };

    if (navigator.share && navigator.canShare?.(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Share failed:', err);
        alert('Share thất bại. Vui lòng thử trên mobile hoặc fallback copy.');
        handleCopyLink(post.slug); // Fallback
      }
    } else {
      console.warn('Web Share API không hỗ trợ');
      handleCopyLink(post.slug);
    }
  };

  return (
    <div className="flex flex-col divide-y pb-8">
      {initialPosts.map((post) => (
        <div key={post.slug} className="bg-white">
          <div className="flex gap-2 items-center p-4 pb-0">
            <div
              className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-white overflow-hidden"
              style={{ backgroundImage: `url('${AppConfig.avatar.src}')` }}
            />
            <div>
              <div className="font-semibold">{AppConfig.name}</div>
              <div className="text-xs text-neutral-500">@{AppConfig.username}</div>
            </div>
          </div>

          <div className="mt-4 text-sm">
            <a href={`/blog/${post.slug}/`} className="block px-4 pb-4">
              <div className="font-bold">{post.title}</div>
              <div className="text-neutral-500 line-clamp-2">{post.summary}</div>
            </a>

            {post.images?.[0] && (
              <div className="px-4 pb-2">
                <img
                  src={post.images[0]}
                  alt={post.title}
                  className="w-full aspect-video object-cover rounded-md"
                />
              </div>
            )}

            <div className="text-xs text-neutral-500 px-4 py-2 flex justify-between items-center">
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => handleShare(post)}
                  className="flex gap-1 items-center hover:text-neutral-900 transition-colors"
                >
                  <FiShare />
                  Chia sẻ
                </button>

                <button
                  type="button"
                  onClick={() => handleCopyLink(post.slug)}
                  className="flex gap-1 items-center hover:text-neutral-900 transition-colors"
                >
                  <FiLink />
                  {copiedSlug === post.slug ? 'Đã sao chép!' : 'Sao chép link'}
                </button>
              </div>

              <div>{post.date}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}