import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import { toast } from 'sonner';
import FormError from '../form-error';
import Loading from '../loading';
import TextInput from '../text-input';
import { Button } from '../ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export default function CreateBusinessSocialForm({ business, socials }) {
  const [open, setOpen] = useState(false);

  const { data, setData, errors, post, reset, processing } = useForm({
    business_id: business.id,
    platform_name: '',
    url: '',
  });

  const usedPlatforms = new Set(socials.map((s) => s.platform_name));

  const platforms = [
    { value: 'facebook', label: 'Facebook' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'x', label: 'X' },
    { value: 'tiktok', label: 'TikTok' },
    { value: 'youtube', label: 'YouTube' },
    { value: 'discord', label: 'Discord' },
  ];

  const createBusinessSocial = (e) => {
    e.preventDefault();
    post(route('business.store.social'), {
      preserveScroll: true,
      only: ['business'],
      onSuccess: () => {
        reset();
        toast.success('Business Social Created Successfully');
        setOpen(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Social</Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={createBusinessSocial} className="space-y-6">
          <DialogHeader>
            <DialogTitle>Add social media platform</DialogTitle>
          </DialogHeader>

          <div className="space-y-3">
            {/* <TextInput
                                placeholder="Type platform name here"
                                labelTitle="Platform name"
                                labelName="Platform name"
                                value={data.platform_name}
                                onChange={(e) => setData('platform_name', e.target.value)}
                            /> */}

            <Label htmlFor="select">Social Media Platform</Label>
            <Select className="w-full" id="select" value={data.platform_name} onValueChange={(value) => setData('platform_name', value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Social Media Platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {platforms.map((platform) => (
                    <SelectItem key={platform.value} value={platform.value} disabled={usedPlatforms.has(platform.value)}>
                      {platform.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormError message={errors.platform_name} />
          </div>

          <div className="space-y-3">
            <TextInput
              placeholder="Paste platform page url here"
              labelTitle="Page URL"
              labelName="Page URL"
              value={data.url}
              onChange={(e) => setData('url', e.target.value)}
            />
            <FormError message={errors.url} />
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
