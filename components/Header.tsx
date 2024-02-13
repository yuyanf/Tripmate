import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 w-full backdrop-blur-sm">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold text-pink-300">
          Tripmate
        </Link>

        <div className="flex gap-2">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button>Sign in</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
