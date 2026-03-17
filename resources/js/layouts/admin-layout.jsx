import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';
import Footer from '../components/footer';
import Nav from '../components/nav/nav';
import { Link, router } from '@inertiajs/react';
import { Button } from '../components/ui/button';
import AdminNav from '../components/components-admin/AdminNav';

export default function AdminLayout({ children }) {

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <AdminNav />
            <main className='max-w-7xl w-full mx-auto'>
            {children}
            </main>
            {/* <Footer /> */}
            <Toaster position="top-right" duration={1000} />
        </ThemeProvider>
    );
}
