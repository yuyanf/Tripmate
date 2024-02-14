"use client";

import { Plane } from "lucide-react";

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
  const tripData = {};

  const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;

  const createTrip = async () => {
    try {
      const response = await fetch(`${base_url}/trip`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tripData),
      });

      if (response.ok) {
        console.log("Trip created successfully");
      } else {
        console.error("Failed to create trip");
      }
    } catch (error) {
      console.error("Error creating trip:", error);
    }
  };

  return (
    <div className=" flex flex-col gap-16">
      <DestinationList />
      <PeopleInputs />
      <BudgetInput />
      <CollabratorInput />

      <Button className="mx-auto mt-6" onClick={createTrip}>
        {/* <GiPartyPopper className="mr-2 h-5 w-5" /> */}
        <Plane className="mr-2 h-5 w-5" />
        Create trip
      </Button>
    </div>
  );
};

export default TripForm;
