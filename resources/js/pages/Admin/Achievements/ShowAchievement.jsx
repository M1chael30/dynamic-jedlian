import { Button } from '@/components/ui/button';
import { Head, useForm } from '@inertiajs/react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../../../components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import AdminLayout from '../../../layouts/admin-layout';
import TextInput from '../../../components/text-input';
import { Textarea } from '@headlessui/react';

export default function ShowAchievement({ achievement, period, descriptions }) {
    console.log(descriptions);
    
    const {data, setData, put, errors, processing} = useForm({
        description_text:"",
    });

    const handleUpdate = (e) => {
        e.preventDefault();

        // put(`/posts/${}`)

    }
    
    return (
        <>
            <Head title="Achievement" />
            <section className="mx-auto w-full max-w-3xl space-y-5 px-4 py-5">
                <Table className={`border p-5`}>
                    <TableHeader>
                        <TableRow>
                            <TableHead className={`text-center`}>Description</TableHead>
                            <TableHead className={`text-center`}>Created at</TableHead>
                            <TableHead className={`text-center`}>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {descriptions.map((description, index) => (
                            <TableRow className={`text-sm overflow-ellipsis`} key={index}>
                                <TableCell className={`max-w-5 truncate`}>{description.description_text}</TableCell>
                                <TableCell className={`text-center`}>
                                    {new Date(description.updated_at).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                        hour: 'numeric',
                                        minute: 'numeric',
                                    })}
                                </TableCell>
                                <TableCell>
                                        <Dialog>
                                            <form className="flex gap-2 justify-center">
                                                <DialogTrigger asChild>
                                                    <Button variant="outline" size="sm">
                                                        Edit
                                                    </Button>
                                                </DialogTrigger>

                                                <DialogContent className="sm:max-w-sm">
                                                    <DialogHeader>
                                                        <DialogTitle>Edit description</DialogTitle>
                                                        <DialogDescription>
                                                            Make changes to the description. Click save when you're done.
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <Textarea rows="3" labelTitle={'Update description'} value={description.description_text}/>

                                                    <DialogFooter>
                                                        <DialogClose asChild>
                                                            <Button variant="outline">Cancel</Button>
                                                        </DialogClose>
                                                        <Button type="submit">Save changes</Button>
                                                    </DialogFooter>
                                                </DialogContent>
                                                <Button size="sm">Delete</Button>
                                            </form>
                                        </Dialog>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
        </>
    );
}

ShowAchievement.layout = (page) => <AdminLayout children={page} />;
