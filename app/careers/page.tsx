import Careers from "@/views/Careers";
import { getAllJobs } from "@/lib/queries";

export const revalidate = 3600;

export default async function Page() {
    const jobs = await getAllJobs();
    return <Careers jobs={jobs} />;
}
