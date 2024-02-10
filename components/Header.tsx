import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 px-6 backdrop-blur-md">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between">
        <Link href="/">
          <Logo className="h-full w-40" />
        </Link>

        <div className="flex gap-4">
          <Link href="/login" className="rounded-lg border px-4 py-2 text-lg">
            Login
          </Link>
          <Link href="/sign-up" className="rounded-lg border px-4 py-2 text-lg">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
