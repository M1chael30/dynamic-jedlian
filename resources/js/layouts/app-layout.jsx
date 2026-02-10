import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';
import Nav from '../components/nav/nav';
import Footer from '../components/footer';

export default function AppLayout({ children }) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Nav />
            {children}
            <Footer/>
            <Toaster position="top-right" duration={1000} />
        </ThemeProvider>
    );
}
