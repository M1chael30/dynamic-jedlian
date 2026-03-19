import { Head, Link } from "@inertiajs/react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import TextInput from "../../components/text-input";
import AuthLayout from "../../layouts/auth-layout";
import { useForm } from "@inertiajs/react";
import Loading from '../../components/loading'
import FormError from '../../components/form-error'
import { toast } from "sonner";

export default function Login() {

    const { data, setData, errors, post, processing, reset } = useForm({
        email: '',
        password: '',
    })

    const submit = (e) => {
        e.preventDefault()
        post(route('login'), {
            preserveScroll: true,
            onFinish: () => reset('password'),
            onSuccess: () => toast.success('User login successfully.'),
        });
    }

    return (
        <>
            <Head title=" Login " />
            <section className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 flex-col gap-4">
                <div className="aspect-video w-40 flex items-center">
                    <Link href={route('home')}>
                        <img src="/images/business_logo/HOLDINGS-LOGO2.png" alt="Holdings logo" className="w-full h-full" />
                    </Link>
                </div>
                <Card className={"w-full max-w-sm"}>
                    <CardHeader className>
                        <CardTitle className="text-center">Login</CardTitle>
                    </CardHeader>
                    <form onSubmit={submit} className="space-y-5">
                        <CardContent className={"space-y-4"}>
                            <div className="space-y-4">
                                <TextInput
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    placeholder="example@example.com"
                                    labelName={"email"}
                                    labelTitle={"Email"}
                                />
                                <FormError message={errors.email} />
                            </div>
                            <div className="space-y-4">
                                <TextInput
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                    type="password"
                                    placeholder="********"
                                    labelName={"password"}
                                    labelTitle={"Password"}
                                />
                                <FormError message={errors.password} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button disabled={processing} type="submit" className="w-full">
                                {processing ? <Loading title={'Logging in...'} /> : 'Login'}
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </section>
        </>
    );
}


Login.layout = page => <AuthLayout children={page} />