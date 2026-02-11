import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

export default function PersonWidgetMobile({ image, name, position, content }) {
    return (
        <Card className={'grid w-full border border-yellow-600 py-0 sm:w-100 md:hidden'}>
            <CardHeader className="justify-center rounded-t-xl pt-5">
                <img src={image} alt={'boss'} className="h-50 w-50 rounded-full border border-yellow-600 shadow-xs" />
            </CardHeader>
            <CardContent>
                <CardTitle className={'text-center text-xl'}>
                    <div className="bg-[radial-gradient(circle_at_75%,#c89116,#c89116,#cfceaa)] bg-clip-text text-transparent">
                        <h1>{name}</h1>
                        <h1>{position}</h1>
                    </div>
                </CardTitle>
                <CardDescription>
                    <p className="h-auto p-5 text-center text-xs text-gray-300">{content}</p>
                </CardDescription>
            </CardContent>
        </Card>
    );
}
