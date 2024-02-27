"use client";

import { Plane } from "lucide-react";

import { Button } from "../ui/button";
import BudgetInput from "./BudgetInput";
import CollabratorInput from "./CollabratorInput";
import DestinationList from "./DestinationList";
import PeopleInputs from "./PeopleInputs";
import { useDestinations } from "@/context/destinations";
import { Destination, TRIP_STATUS, User } from "@/types";

const TripForm = () => {
  const { destinations, city, email, budget, people, withWhom } =
    useDestinations();
  const tripData = {
    title:
      destinations.length > 1
        ? destinations
            .map((des) => des.destination)
            .slice(0, -1)
            .join(", ") +
          " and " +
          destinations.map((des) => des.destination).slice(-1)
        : destinations[0].destination,
    startDate: destinations[0].startDate,
    endDate: destinations[destinations.length - 1].endDate,
    userId: 1,
    numberOfPeople: people,
    relationship: withWhom,
    totalBudget: budget,
    editors:
      email === ""
        ? ["antonlevo0903@gmail.com"]
        : [email, "antonlevo0903@gmail.com"],
    status: TRIP_STATUS.CREATED,
  };
  const destinationsData: Destination[] = [];
  const itinerariesData: Destination[] = [];

  const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleCreate = async () => {
    console.log(tripData);
    try {
      // Call the create trip API
      const tripResponse = await fetch(`${base_url}/trip`, {
        method: "POST",
        body: JSON.stringify(tripData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (tripResponse.status !== 201) {
        throw new Error(await tripResponse.json());
      }

      const tripResult = await tripResponse.json();

      // // Call the create destination API
      // const destinationResponse = await fetch(`${base_url}/bulk_destinations`, {
      //   method: "POST",
      //   body: JSON.stringify(destinationsData),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      // if (destinationResponse.status !== 201) {
      //   throw new Error("Failed to create destination");
      // }
      // const destinationResult = await destinationResponse.json();

      // // Call the create itinerary API
      // const itineraryResponse = await fetch(`${base_url}/bulk_itineraries`, {
      //   method: "POST",
      //   body: JSON.stringify(itinerariesData),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      // if (itineraryResponse.status !== 201) {
      //   throw new Error("Failed to create itinerary");
      // }
      // const itineraryResult = await itineraryResponse.json();

      // Handle the results as needed
      console.log("All operations completed successfully!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className=" flex flex-col gap-16">
      <DestinationList />
      <PeopleInputs />
      <BudgetInput />
      <CollabratorInput />

      <Button className="mx-auto mt-6" onClick={handleCreate}>
        <Plane className="mr-2 h-5 w-5" />
        Create trip
      </Button>
    </div>
  );
};

export default TripForm;
