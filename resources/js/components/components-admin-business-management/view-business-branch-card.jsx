import { Button } from '../ui/button';

import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger, DialogHeader, DialogTitle } from '../ui/dialog';
import { useState } from 'react';

export default function ViewBusinessBranchCard({ branch }) {

  const [open, setOpen] = useState(false)


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={'link'}>View</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Business Branch</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <p>{branch.address}</p>
        </div>
        <div className="bg-muted aspect-video w-full overflow-hidden rounded-xl">
          {
            branch.google_map_embed &&
            <iframe
              src={`https://www.google.com/maps/embed?pb=${branch.google_map_embed}`}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
              x="true"
            ></iframe>
          }
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Back</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
