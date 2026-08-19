import CaseStudies from "@/views/CaseStudies";
import { getAllCaseStudies } from "@/lib/queries";

export const revalidate = 3600;

export default async function Page() {
  const caseStudies = await getAllCaseStudies();
  return <CaseStudies caseStudies={caseStudies} />;
}
