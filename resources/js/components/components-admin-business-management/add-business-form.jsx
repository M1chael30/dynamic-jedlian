import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import { toast } from 'sonner';
import Loading from '../loading';
import TextInput from '../text-input';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

export default function AddBusinessForm() {
  const [open, setOpen] = useState(false);

  const { data, setData, errors, post, reset, processing } = useForm({
    name: '',
    description: '',
    category: '',
  });

  const addBusiness = (e) => {
    e.preventDefault();

    post(route('business.store'), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        toast.success('Business Created Successfully');
        setOpen(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">Add Business</Button>
      </DialogTrigger>

      <DialogContent>
        <form onSubmit={addBusiness} className="space-y-6">
          <DialogHeader>
            <DialogTitle>Add Business</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Name */}
            <TextInput
              placeholder="Type name here"
              labelTitle="Name"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              error={errors.name}
            />

            {/* Category Radio Buttons */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>

              <div className="flex gap-6">
                {['Office', 'Branch'].map((cat) => (
                  <label key={cat} className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      value={cat}
                      checked={data.category === cat}
                      onChange={(e) => setData('category', e.target.value)}
                    />
                    {cat}
                  </label>
                ))}
              </div>

              {errors.category && (
                <p className="text-sm text-red-500">{errors.category}</p>
              )}
            </div>

            {/* Description Textarea */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>

              <textarea
                className="w-full rounded-md border p-2 text-sm"
                rows="4"
                placeholder="Write description here..."
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
              />

              {errors.description && (
                <p className="text-sm text-red-500">{errors.description}</p>
              )}
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button type="submit" disabled={processing}>
              {processing ? <Loading title="Loading" /> : 'Add'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}