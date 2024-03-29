"use client";

import { GiPartyPopper } from "react-icons/gi";
import { Button } from "../ui/button";
import BudgetInput from "./BudgetInput";
import CollabratorInput from "./CollabratorInput";
import DestinationList from "./DestinationList";
import PeopleInputs from "./PeopleInputs";

const TripForm = () => {
  return (
    <div className=" flex flex-col gap-16">
      <DestinationList />
      <PeopleInputs />
      <BudgetInput />
      <CollabratorInput />
      <Button className="mx-auto mt-6">
        <GiPartyPopper className="mr-2 h-5 w-5" />
        Create trip
      </Button>
    </div>
  );
};

export default TripForm;
