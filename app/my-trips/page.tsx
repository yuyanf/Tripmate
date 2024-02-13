"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";

const MyTrip = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  return <div>my trip page</div>;
};

export default MyTrip;
