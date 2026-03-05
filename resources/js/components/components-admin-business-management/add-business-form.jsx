import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import { toast } from 'sonner';
import Loading from '../loading';
import TextInput from '../text-input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import FormError from '../form-error';
import { Label } from '../ui/label';

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
        <Button>Add Business</Button>
      </DialogTrigger>

      <DialogContent>
        <form onSubmit={addBusiness} className="space-y-6">
          <DialogHeader>
            <DialogTitle>Add Business</DialogTitle>
          </DialogHeader>

          <div className="space-y-3">
            <TextInput
              placeholder="Type name here"
              labelTitle="Name"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
            />
            <FormError message={errors.name} />
          </div>

          <div className="space-y-3">
            <Label htmlFor="select">Category</Label>
            <Select
              className="w-full"
              id="select"
              value={data.category}
              onValueChange={(value) => setData('category', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Business Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='office'>Office</SelectItem>
                  <SelectItem value='branches'>Branches</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormError message={errors.category} />
          </div>

          <div className="space-y-3">
            <Label>Description</Label>
            <Textarea
              className="w-full rounded-md border p-2 text-sm"
              rows="4"
              placeholder="Write description here..."
              value={data.description}
              onChange={(e) => setData('description', e.target.value)}
            />

            <FormError message={errors.description} />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button type="submit" disabled={processing}>
              {processing ? <Loading title="Loading" /> : 'Create'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}