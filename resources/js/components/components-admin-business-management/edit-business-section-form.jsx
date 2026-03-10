import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import { toast } from 'sonner';
import FormError from '../form-error';
import Loading from '../loading';
import TextInput from '../text-input';
import { Button } from '../ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export default function EditBusinessSectionForm({ section, sections }) {
  const [open, setOpen] = useState(false);

  // console.log(section);

  const { data, setData, errors, put, processing, isDirty } = useForm({
    business_id: section?.business_id,
    title: section?.title,
    content: section?.content,
  });

  const sectionCount = sections.length;
    const unavailableNumber = new Set(sections.map((s) => s.order));


  const updateBusinessSection = (e) => {
    e.preventDefault();
    put(route('business.update.section', section?.id), {
      preserveScroll: true,
      onSuccess: () => {
        toast.success('Business section updated successfully');
        setOpen(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={'link'}>Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={updateBusinessSection} className="space-y-6">
          <DialogHeader>
            <DialogTitle>Update business page sections</DialogTitle>
          </DialogHeader>

          <div className="space-y-3">
            <TextInput
              placeholder="Type title here"
              labelTitle="Section Title"
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
            />
            <FormError message={errors.title} />
          </div>
          <div className="space-y-3">
            <Label htmlFor="desc">Content</Label>
            <Textarea
              id="desc"
              className={'w-full'}
              placeholder="Type your content here..."
              value={data.content}
              onChange={(e) => setData('content', e.target.value)}
            />
            <FormError message={errors.content} />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={processing || !isDirty}>
              {processing ? <Loading title="Loading" /> : 'Update'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
