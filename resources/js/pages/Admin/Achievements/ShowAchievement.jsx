import { Button } from '@/components/ui/button';
import { Textarea } from '@headlessui/react';
import { Head, Link, useForm } from '@inertiajs/react';
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
import { useState } from 'react';
import { toast } from 'sonner';

export default function ShowAchievement({ achievement, period, descriptions }) {

    const [openEdit, setOpenEdit] = useState(false)

    const {
        data,
        setData,
        put,
        errors,
        reset,
        processing,
        delete: destroy,
    } = useForm({
        id: null,
        description_text: '',
    });

    const handleUpdate = (e) => {
        e.preventDefault();

        put(route('achievement.update.description', data.id), {
            onSuccess: () => {
            toast.success('Description updated successfully')
            }
        });
    };

    const handleDelete = (e) => {
        destroy(route('achievement.delete.description', data.id));
    };

    return (
        <>
            <Head title="Achievement" />
            <section className="mx-auto w-full max-w-3xl space-y-5 px-4 py-5">
                <div className="flex items-center justify-between rounded-sm border p-4 text-sm">
                    <div>
                    <h1>Period: {period.year}</h1>
                    <h1>Title: {achievement.title}</h1>
                    </div>
                    <div>
                    <Link className="text-sm hover:underline" href={route('achievement.create.description', achievement.id)}>Add Description?</Link>
                    </div>
                </div>
                <div className={`rounded-sm border`}>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className={`text-center`}>Descriptions</TableHead>
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
                                            <div className="flex justify-center gap-2">
                                        <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={(e) =>
                                                            setData({ id: description.id, description_text: description.description_text })
                                                        }
                                                    >
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
                                                    <form onSubmit={handleUpdate}>
                                                        <Textarea
                                                            rows="5"
                                                            className="w-full border-2 p-1 text-sm text-zinc-300"
                                                            value={data.description_text}
                                                            onChange={(e) => setData('description_text', e.target.value)}
                                                        />
                                                        <DialogFooter>
                                                            <DialogClose asChild>
                                                                <Button variant="outline">Cancel</Button>
                                                            </DialogClose>
                                                            <Button type="submit">Save changes</Button>
                                                        </DialogFooter>
                                                    </form>
                                                </DialogContent>
                                        </Dialog>

                                        <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button
                                                        size="sm"
                                                        onClick={(e) =>
                                                            setData({ id: description.id, description_text: description.description_text })
                                                        }
                                                    >
                                                        Delete
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-sm">
                                                    <DialogHeader>
                                                        <DialogTitle>Are you sure?</DialogTitle>
                                                        <DialogDescription>
                                                            Are you sure you want to delete this description?
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <form onSubmit={handleDelete}>
                                                        <p className=" text-zinc-300 mb-10">
                                                            {data.description_text}
                                                        </p>
                                                        <DialogFooter>
                                                            <DialogClose asChild>
                                                                <Button variant="outline">Cancel</Button>
                                                            </DialogClose>
                                                            <Button type="submit" variant="destructive">Delete</Button>
                                                        </DialogFooter>
                                                    </form>
                                                </DialogContent>
                                        </Dialog>   

                                            </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </section>
        </>
    );
}

ShowAchievement.layout = (page) => <AdminLayout children={page} />;
