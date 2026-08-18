// app/blog/page.tsx
import Blog from "@/views/Blog";
import { getAllPosts } from "@/lib/queries";

export const revalidate = 3600;

export default async function Page() {
  const posts = await getAllPosts();
  return <Blog posts={posts} />;
}