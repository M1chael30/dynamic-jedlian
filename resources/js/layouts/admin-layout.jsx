import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';
import Footer from '../components/footer';
import Nav from '../components/nav/nav';
import { Link, router } from '@inertiajs/react';
import { Button } from '../components/ui/button';

export default function AdminLayout({ children }) {

    const handleLogout = () => {
        router.post('/admin/logout')
    }
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Nav />
            <Button onClick={handleLogout}>Logout</Button>
            {children}
            {/* <Footer /> */}
            <Toaster position="top-right" duration={1000} />
        </ThemeProvider>
    );
}
