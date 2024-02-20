"use client";

import { Plane } from "lucide-react";

import { Button } from "../ui/button";
import BudgetInput from "./BudgetInput";
import CollabratorInput from "./CollabratorInput";
import DestinationList from "./DestinationList";
import PeopleInputs from "./PeopleInputs";
import { useDestinations } from "@/context/destinations";
import { Destination } from "@/types";

const TripForm = () => {
  const { destinations, city } = useDestinations();
  const tripData = {};
  const destinationsData: Destination[] = [];
  const itinerariesData: Destination[] = [];

  const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleCreate = async () => {
    console.log(destinations, city);
    // try {
    //   // Call the create trip API
    //   const tripResponse = await fetch(`${base_url}/trip`, {
    //     method: "POST",
    //     body: JSON.stringify(tripData),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   if (tripResponse.status !== 201) {
    //     throw new Error("Failed to create trip");
    //   }

    //   const tripResult = await tripResponse.json();

    //   // Call the create destination API
    //   const destinationResponse = await fetch(`${base_url}/bulk_destinations`, {
    //     method: "POST",
    //     body: JSON.stringify(destinationsData),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   if (destinationResponse.status !== 201) {
    //     throw new Error("Failed to create destination");
    //   }
    //   const destinationResult = await destinationResponse.json();

    //   // Call the create itinerary API
    //   const itineraryResponse = await fetch(`${base_url}/bulk_itineraries`, {
    //     method: "POST",
    //     body: JSON.stringify(itinerariesData),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   if (itineraryResponse.status !== 201) {
    //     throw new Error("Failed to create itinerary");
    //   }
    //   const itineraryResult = await itineraryResponse.json();

    //   // Call the update trip API with created destinations
    //   const updatedTripResponse = await fetch(
    //     `${base_url}/trip/${tripResult.id}`,
    //     {
    //       method: "PUT",
    //       body: JSON.stringify(destinationResult),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   if (updatedTripResponse.status !== 200) {
    //     throw new Error("Failed to update trip");
    //   }
    //   const updatedTripResult = await updatedTripResponse.json();

    //   // Call the update destination API with created itinerary
    //   const updatedDestinationResponse = await fetch(
    //     `${base_url}/trip/${destinationResult.id}`,
    //     {
    //       method: "PUT",
    //       body: JSON.stringify(itineraryResult),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   if (updatedDestinationResponse.status !== 200) {
    //     throw new Error("Failed to update destination");
    //   }
    //   const updatedDestinationResult = await updatedDestinationResponse.json();

    //   // Handle the results as needed
    //   console.log("All operations completed successfully!");
    // } catch (error) {
    //   console.error("Error:", error);
    // }
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
