import Home from "@/views/Home";
import { getAllPosts, getAllCaseStudies } from "@/lib/queries";

export const revalidate = 3600;

export default async function Page() {
  const [posts, caseStudies] = await Promise.all([getAllPosts(), getAllCaseStudies()]);
  return <Home posts={posts} caseStudies={caseStudies} />;
}
