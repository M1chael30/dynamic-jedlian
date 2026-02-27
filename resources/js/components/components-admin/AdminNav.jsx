import { Link, usePage } from "@inertiajs/react";
import { Button } from "../ui/button";
import { router } from "@inertiajs/react";

export default function AdminNav() {
    const handleLogout = () => {
        router.post(route('logout'))
    }

    const page = usePage().component
    const user = usePage().props.auth.user

    return (
        <header className="sticky top-0 z-50">
            <div className="flex h-16 shrink-0 justify-between bg-background items-center px-4 mx-auto max-w-7xl w-full">
                {/* logo */}
                <Link href={route("home")}>
                    <img
                        src={"/storage/business_logo/HOLDINGS-LOGO2.png"}
                        alt=""
                        className="w-33 h-10 object-cover select-none"
                    />
                </Link>
                <div className="ml-auto space-x-5">
                    <Button variant={'ghost'}>Welcome! {user?.name}</Button>
                    <Button variant={page === 'Admin/Users/UserManagement' ? 'secondary' : 'ghost'} asChild>
                        <Link href={route('user.index')}>
                            Manage Users
                        </Link>
                    </Button>
                    <Button variant={'ghost'} onClick={handleLogout}>Logout</Button>
                </div>
            </div>
        </header>
    );
}