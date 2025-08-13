import React, { useState } from 'react'
import { PlusSquare } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';

const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <div>
      {/* Resume Card */}
      <div
        className='p-7 py-12 items-center flex justify-center bg-slate-100 rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer'
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare color="grey" size={30} />
      </div>

      {/* Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <p>Add a title for your new resume</p>
              <Input className="my-2" placeholder="Eg.FullStack Resume" />
            </DialogDescription>
            <div className='flex justify-end gap-5'>
              <Button onClick={()=>setOpenDialog(false)}>Cancle</Button>
              <Button  variant="ghost">Create</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddResume
