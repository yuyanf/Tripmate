import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 px-6 backdrop-blur-md">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between">
        <Link href="/">
          <Logo className="h-full w-20 sm:w-40" />
        </Link>

        <div className="flex gap-2">
          <Button asChild className="rounded-full">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild variant="secondary" className="rounded-full">
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
