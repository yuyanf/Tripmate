"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

const SignupModal = () => {
  const searchParams = useSearchParams();
  const signupParam = searchParams.get("login");

  const [isOpen, setIsOpen] = useState(!!signupParam);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (open) {
          window.history.replaceState(null, "", "/signup");
        } else {
          window.history.replaceState(null, "", "/");
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline">Sign up</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign up</DialogTitle>
          <DialogDescription>
            You need to sign up to store and manage your trips
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SignupModal;
