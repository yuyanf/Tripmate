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

const LoginModal = () => {
  const searchParams = useSearchParams();
  const loginParam = searchParams.get("login");

  const [isOpen, setIsOpen] = useState(!!loginParam);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (open) {
          window.history.replaceState(null, "", "/login");
        } else {
          window.history.replaceState(null, "", "/");
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline">Log in</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Log in</DialogTitle>
          <DialogDescription>
            You need to log in to store and manage your trips
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
