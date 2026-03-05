import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';
import Footer from '../components/footer';
import Nav from '../components/nav/nav';
import { usePage } from '@inertiajs/react';

export default function AppLayout({ children }) {

const { businesses } = usePage().props

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Nav businesses={businesses}/>
            {children}
            <Footer />
            <Toaster position="top-right" duration={1000} />
        </ThemeProvider>
    );
}
