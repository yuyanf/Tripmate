import { Input } from "@/components/ui/iconInput";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { City, Destination, useDestinations } from "@/context/destinations";
import { debounce } from "@/lib/utils";
import { Trash } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import { DatePicker } from "./DatePicker";

interface DestinationFormProps {
  id: number;
  isFirst: boolean;
  destination: Destination;
}

const DestinationInputs = ({
  id,
  isFirst,
  destination,
}: DestinationFormProps) => {
  const {
    destinations,
    deleteDestination,
    updateDestination,
    updateCity,
    cities,
  } = useDestinations();

  const [filteredCities, setFilteredCities] = useState<City[]>([]);

  const handleSearchCity = debounce((value: string) => {
    const searchedCities = cities.filter((city) =>
      city.name.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredCities(searchedCities);
  }, 300);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateDestination(id, e.currentTarget.value);
    handleSearchCity(e.currentTarget.value);
  };

  const handleCity = (city: City) => {
    updateCity(city);
    updateDestination(id, city.name);
    setFilteredCities([]);
  };

  return (
    <div className="flex flex-col gap-3 rounded-md duration-200">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-medium tracking-tight">
          {isFirst ? "Where do you want to go?" : "Going next to"}
        </h2>
        {destinations.length > 1 && (
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger
                onClick={() => deleteDestination(id)}
                className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                <Trash className="h-4 w-4" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete destination</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="relative">
        <Input
          placeholder="Search destination (cities only)"
          Icon={IoSearchOutline}
          value={destination.destination}
          onChange={handleChange}
        />
        {filteredCities.length > 0 && destination.destination && (
          <ul className="absolute top-10 z-40 max-h-60 w-full items-center overflow-y-auto rounded-md border border-input bg-white p-2 shadow-md">
            {filteredCities.map((city: City) => (
              <li
                className="cursor-pointer flex-col rounded-md  hover:bg-accent"
                key={city.id}
              >
                <Button
                  className="w-full justify-start"
                  variant="link"
                  onClick={() => handleCity(city)}
                >
                  {city.name}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex gap-3">
        <DatePicker placeholder="Start date" id={id} type="start" />
        <DatePicker placeholder="End date" id={id} type="end" />
      </div>
    </div>
  );
};

export default DestinationInputs;
