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
import { PenIcon } from 'lucide-react';

export default function HomeStatsForm({ stat }) {
  const [open, setOpen] = useState(false);

  const { data, setData, errors, put, processing, isDirty, reset } = useForm({
    //  id: stat.id,
    title: stat.title,
    stat: stat.stat,
    description: stat.description,
  });

  const submitHomeStatsForm = (e) => {
    e.preventDefault();
    //  setData('id', stat.id);

    put(route('update.homestat', stat?.id), {
      onFinish: () => {
        toast.success('Achievement Description Updated Successfully');
        //   reset();
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={'ghost'}>
          <PenIcon />  Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={submitHomeStatsForm} className="space-y-6">
          <DialogHeader>
            <DialogTitle>Edit Statistics</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <TextInput
              labelTitle={'Title'}
              labelName={'title'}
              placeholder={'ex. Official branches & offices'}
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
            />
            <FormError message={errors.title} />
          </div>

          <div className="space-y-3">
            <TextInput
              labelTitle={'Stats'}
              labelName={'stats'}
              placeholder={'ex. 20+'}
              value={data.stat}
              onChange={(e) => setData('stats', e.target.value)}
            />
            <FormError message={errors.stat} />
          </div>

          <div className="space-y-3">
            <Label htmlFor="desc">Description</Label>
            <Textarea
              id="desc"
              className={'w-full'}
              placeholder="Stats description"
              value={data.description}
              onChange={(e) => setData('description', e.target.value)}
            />
            <FormError message={errors.description} />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={processing || !isDirty}>
              {processing ? <Loading title="Loading..." /> : 'Update'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
