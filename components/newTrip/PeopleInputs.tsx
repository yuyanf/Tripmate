"use client";

import { Minus, Plus } from "lucide-react";
import { BsBalloonHeartFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { Button } from "../ui/button";
import { useDestinations } from "@/context/destinations";
import { WITH_WHOM } from "@/types";

const PeopleInputs = () => {
  const { updatePeople, updateRelation, people, withWhom } = useDestinations();

  const handleMinusPeople = (isPlus: string) => {
    if (people === 1) return;
    if (people === 2) {
      updateRelation(undefined);
    }

    updatePeople(isPlus);
  };

  const handlePlusPeople = (isPlus: string) => {
    if (people === 1) {
      updateRelation(WITH_WHOM.FRIENDS);
    }
    updatePeople(isPlus);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium tracking-tight">
          How many people are going?
        </h2>
        <div className="flex justify-between gap-2 rounded-md border border-gray-200 bg-white p-1">
          <div className="flex items-center gap-2">
            <p className="border-border-color flex h-full items-center rounded-md border bg-gray-100 px-4 text-sm font-medium">
              {people}
            </p>
            <span>{people === 1 ? "Person" : "People"}</span>
          </div>

          <div className="flex gap-2">
            <Button
              className="min-w-[40px]"
              variant="outline"
              size="icon"
              onClick={() => handleMinusPeople("minus")}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <Button
              className="min-w-[40px]"
              variant="outline"
              size="icon"
              onClick={() => handlePlusPeople("plus")}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>

      {people > 1 && (
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-medium tracking-tight">
            Who is traveling with you?
          </h3>
          <div className="flex justify-between gap-2 rounded-md">
            {people <= 2 && (
              <Button
                className="w-full"
                variant={withWhom === WITH_WHOM.COUPLE ? "default" : "outline"}
                onClick={() => updateRelation(WITH_WHOM.COUPLE)}
              >
                <BsBalloonHeartFill className="mr-2 h-5 w-5" />
                <span>Couple</span>
              </Button>
            )}
            <Button
              className="w-full"
              variant={withWhom === WITH_WHOM.FRIENDS ? "default" : "outline"}
              onClick={() => updateRelation(WITH_WHOM.FRIENDS)}
            >
              <FaUserFriends className="mr-2 h-5 w-5" />
              <span>Friends</span>
            </Button>
            <Button
              className="w-full"
              variant={withWhom === WITH_WHOM.FAMILY ? "default" : "outline"}
              onClick={() => updateRelation(WITH_WHOM.FAMILY)}
            >
              <MdFamilyRestroom className="mr-2 h-5 w-5" />
              <span>Family</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeopleInputs;
