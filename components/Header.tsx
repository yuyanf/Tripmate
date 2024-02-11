import React from 'react';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode='modal'>
          <Button>Sign in</Button>
        </SignInButton>
      </SignedOut>
    </header>
  );
};

export default Header;
