import AchievementsContentSection from '@/components/components-achievements-page/achievements-content-section';
import AchievementsTopSection from '@/components/components-achievements-page/achievements-top-section';
import { Head } from '@inertiajs/react';
import PaginationLinks from '../../components/pagination-links';

export default function Achievements({ periods }) {
    return (
        <>
            <Head title="Achievements" />
            <section className="mx-auto w-full max-w-7xl">
                <AchievementsTopSection />
                <AchievementsContentSection periods={periods.data} />
                <PaginationLinks
                    prev_page_url={periods?.prev_page_url}
                    next_page_url={periods?.next_page_url}
                    loadOnly={['periods']}
                />
            </section>
        </>
    );
}
