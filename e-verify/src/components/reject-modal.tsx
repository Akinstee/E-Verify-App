'use client'

import { useState } from "react"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog"

export function RejectDialog() {
  const [isSuccessful, setIsSuccessful] = useState(false)

  const handleSubmit = () => {
    setIsSuccessful(true)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-5/12 border py-2 rounded-md bg-gray-100">Reject</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[50rem]">
        {isSuccessful ? (
          <div>
            <h1>Sent</h1>
          </div>
        ) : (
          <div>
            <DialogHeader>
              {/* <DialogTitle>Please help recipient and other recruiters know what went wrong</DialogTitle> */}
              <DialogDescription className="mt-8 mb-6 text-[16px] font-[500] text-center">
                Please help recipient and other recruiters know what went wrong
              </DialogDescription>
              <textarea placeholder="Tell us why" className="h-[10rem] text-[14px] border border-gray-500 bg-gray-100 p-4 rounded-xl"/>
            </DialogHeader>
            <div className="flex items-center justify-between py-4">
              <Button className="w-5/12 border py-2 rounded-md bg-gray-100 text-gray-600">Cancel</Button>
              <Button onClick={handleSubmit} className="w-5/12 border py-2 rounded-md bg-red-400 text-white">Submit</Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
