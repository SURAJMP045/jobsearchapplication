import React, { useState } from 'react'
import { PlusSquare } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"

const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <div>
      {/* Resume Card */}
      <div
        className='p-14 py-24 items-center flex justify-center bg-slate-100 rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer'
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare color="grey" size={48} />
      </div>

      {/* Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
            <div>
              <Button>Create</Button>
              <Button variant="ghost">Cancle</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddResume
