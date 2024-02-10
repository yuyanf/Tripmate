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

const LoginModal = () => {
  const router = useRouter();

  return (
    <Dialog open={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Log in</DialogTitle>
          <DialogDescription>
            You need to log in to store and manage your trips
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

export default LoginModal;
