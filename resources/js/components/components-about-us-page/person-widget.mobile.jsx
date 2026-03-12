import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar'
import { Image } from 'lucide-react';

export default function PersonWidgetMobile({ image, title, content, position }) {
    return (
        <Card className={'grid w-full border border-yellow-600 py-0 sm:w-100 lg:hidden'}>
            <CardHeader className="justify-center rounded-t-xl pt-5">
                <Avatar className={'size-35 ring-3 ring-amber-500'}>
                    <AvatarImage src={image} className={'object-cover object-top'} />
                    <AvatarFallback>
                        <Image size={28} />
                    </AvatarFallback>
                </Avatar>
            </CardHeader>
            <CardContent>
                <CardTitle className={'text-center text-xl'}>
                    <div
                        className="bg-[radial-gradient(circle_at_75%,#c89116,#c89116,#cfceaa)] bg-clip-text text-transparent"
                    >
                        <h1>{title}</h1>
                        <p className='text-sm'>{position}</p>
                    </div>
                </CardTitle>
                <CardDescription>
                    <p className="h-auto p-5 text-center text-xs text-gray-300">
                        {content}
                    </p>
                </CardDescription>
            </CardContent>
        </Card>
    );
}
