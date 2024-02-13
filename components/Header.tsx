"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 w-full bg-black/[0.1] px-6 backdrop-blur-sm">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between">
        <Link href="/">
          <Logo className="h-full w-20 sm:w-40" />
        </Link>

        <div className="flex gap-2">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" afterSignInUrl="/my-trips">
              <Button>Sign in</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
