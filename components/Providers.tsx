"use client";

import { DestinationsProvider } from "@/context/destinations";
import { ClerkProvider } from "@clerk/nextjs";
import React, { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <DestinationsProvider>{children} </DestinationsProvider>
    </ClerkProvider>
  );
};

export default Providers;
