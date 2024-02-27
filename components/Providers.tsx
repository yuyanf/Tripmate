"use client";

import { DestinationsProvider } from "@/context/destinations";
import { UserProvider } from "@/context/user";
import { ClerkProvider } from "@clerk/nextjs";
import React, { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <UserProvider>
        <DestinationsProvider>{children}</DestinationsProvider>
      </UserProvider>
    </ClerkProvider>
  );
};

export default Providers;
