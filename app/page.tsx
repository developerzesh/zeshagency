import Home from "@/views/Home";
import { getAllPosts } from "@/lib/queries";

export const revalidate = 3600;

export default async function Page() {
  const posts = await getAllPosts();
  return <Home posts={posts} />;
}
