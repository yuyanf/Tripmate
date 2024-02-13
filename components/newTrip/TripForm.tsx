"use client";

import { GiPartyPopper } from "react-icons/gi";
import { Button } from "../ui/button";
import BudgetInput from "./BudgetInput";
import CollabratorInput from "./CollabratorInput";
import DestinationList from "./DestinationList";
import PeopleInputs from "./PeopleInputs";
import { useUser } from "@clerk/nextjs";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  items: undefined | []; // trips
};

const TripForm = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  const createUser = async () => {
    if (!isSignedIn) return;

    const { firstName, lastName, primaryEmailAddress: email } = user;
    const userData = { firstName, lastName, email, trips: [] };

    try {
      const response = await fetch("/api/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("User created successfully");
      } else {
        console.error("Failed to create user");
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className=" flex flex-col gap-16">
      <DestinationList />
      <PeopleInputs />
      <BudgetInput />
      <CollabratorInput />
      <Button className="mx-auto mt-6" onClick={createUser}>
        <GiPartyPopper className="mr-2 h-5 w-5" />
        Create trip
      </Button>
    </div>
  );
};

export default TripForm;
