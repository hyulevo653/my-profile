import {getSortedPostsData} from '@/lib/posts';
import ClientProfilePosts from './ProfileClientPosts';

export default function ProfilePosts() {
  const allPosts = getSortedPostsData();
  return <ClientProfilePosts initialPosts={allPosts} />
}
