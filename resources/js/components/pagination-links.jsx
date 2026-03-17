import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem } from './ui/pagination';
import { Button } from './ui/button';
import { router } from '@inertiajs/react';

export default function PaginationLinks({ prev_page_url, next_page_url, loadOnly }) {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <Button
                        aria-label="Go to previous page"
                        size="icon"
                        variant="ghost"
                        disabled={!prev_page_url}
                        onClick={() => router.get(prev_page_url, {}, { preserveScroll: true })}
                    >
                        <ChevronLeftIcon className="h-4 w-4" />
                    </Button>
                </PaginationItem>
                <PaginationItem>
                    <Button
                        aria-label="Go to next page"
                        size="icon"
                        variant="ghost"
                        disabled={!next_page_url}
                        onClick={() => router.get(next_page_url, {}, { preserveScroll: true, only: loadOnly })}
                    >
                        <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
