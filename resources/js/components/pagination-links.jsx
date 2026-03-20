import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem } from './ui/pagination';
import { Button } from './ui/button';
import { Link, router } from '@inertiajs/react';

export default function PaginationLinks({ prev_page_url, next_page_url, loadOnly }) {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    {
                        prev_page_url ? (
                            <Button variant={'ghost'} asChild>
                                <Link
                                    href={prev_page_url ?? ''}
                                    prefetch='hover'
                                    only={loadOnly}
                                    preserveState
                                    viewTransition
                                >
                                    <ChevronLeftIcon />
                                </Link>
                            </Button>
                        ) : (
                            <Button variant={'ghost'} disabled={!prev_page_url}>
                                <ChevronLeftIcon />
                            </Button>
                        )
                    }
                </PaginationItem>
                <PaginationItem>
                    {
                        next_page_url ? (
                            <Button variant={'ghost'} asChild>
                                <Link
                                    href={next_page_url ?? ''}
                                    prefetch='hover'
                                    only={loadOnly}
                                    preserveState
                                    viewTransition
                                >
                                    <ChevronRightIcon />
                                </Link>
                            </Button>
                        ) : (
                            <Button variant={'ghost'} disabled={!next_page_url}>
                                <ChevronRightIcon />
                            </Button>
                        )
                    }
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
