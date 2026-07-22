import { Suspense } from 'react';
import WorkDetail from "@/views/WorkDetail";

export default function Page() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-paper flex items-center justify-center font-lato text-sm text-ink/50">Loading...</div>}>
            <WorkDetail />
        </Suspense>
    );
}
