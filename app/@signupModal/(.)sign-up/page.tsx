"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

const SignupModal = () => {
  const router = useRouter();

  return (
    <Dialog open={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign up</DialogTitle>
          <DialogDescription>
            You need to sign up to store and manage your trips
          </DialogDescription>
          <DialogClose
            onClick={() => {
              router.back();
            }}
          >
            Close
          </DialogClose>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SignupModal;
