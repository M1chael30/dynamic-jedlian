import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';
import Footer from '../components/footer';
import Nav from '../components/nav/nav';

export default function AdminLayout({ children }) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Nav />
            <Link></Link>
            {children}
            {/* <Footer /> */}
            <Toaster position="top-right" duration={1000} />
        </ThemeProvider>
    );
}
