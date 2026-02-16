import { Head } from "@inertiajs/react";
import { Card, CardHeader,CardTitle,CardContent, CardFooter } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import TextInput from "../../components/text-input";
import AuthLayout from "../../layouts/auth-layout";
import useForm from "@inertiajs/react";

export default function Login() {
    return (
        <>
            <Head title=" Login "/>
            <section className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
                <Card className={"w-full max-w-sm"}>
                    <CardHeader className>
                        <CardTitle className="text-center">Login</CardTitle>
                    </CardHeader>
                    <form action="" className="space-y-5">
                    <CardContent className={"space-y-4"}>
                        <TextInput type="email" placeholder="example@example.com" labelName={"email"} labelTitle={"Email"}/>
                        <TextInput type="password" placeholder="********" labelName={"password"} labelTitle={"Password"}/>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full">Login</Button>
                    </CardFooter>
                    </form>
                </Card>
            </section>
        </>
    );
}


Login.layout = page => <AuthLayout children={page}/>