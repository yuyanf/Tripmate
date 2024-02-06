import { Input } from '@/components/ui/iconInput';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Trash } from 'lucide-react';
import { IoSearchOutline } from 'react-icons/io5';
import { DatePicker } from './DatePicker';
import { Button } from '../ui/button';
import { ChangeEvent, useState, useTransition } from 'react';
import { City, Destination, useDestinations } from '@/app/context/destinations';
import { debounce } from '@/lib/utils';

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
    <div className='flex flex-col gap-3 rounded-md duration-200'>
      <div className='flex items-center justify-between gap-3'>
        <h2 className='text-xl font-medium tracking-tight'>
          {isFirst ? 'Where do you want to go?' : 'Going next to'}
        </h2>
        {destinations.length > 1 && (
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant='outline'
                  size='icon'
                  onClick={() => deleteDestination(id)}
                  asChild
                >
                  <Trash className='h-4 w-4' />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete destination</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className='relative'>
        <Input
          placeholder='Search destination (cities only)'
          Icon={IoSearchOutline}
          value={destination.destination}
          onChange={handleChange}
        />
        {filteredCities.length > 0 && destination.destination && (
          <ul className='absolute top-10 z-40 max-h-60 w-full items-center overflow-y-auto rounded-md border border-input bg-white p-2 shadow-md'>
            {filteredCities.map((city: City) => (
              <li
                className='cursor-pointer flex-col rounded-md  hover:bg-accent'
                key={city.id}
              >
                <Button
                  className='w-full justify-start'
                  variant='link'
                  onClick={() => handleCity(city)}
                >
                  {city.name}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className='flex gap-3'>
        <DatePicker placeholder='Start date' id={id} type='start' />
        <DatePicker placeholder='End date' id={id} type='end' />
      </div>
    </div>
  );
};

export default DestinationInputs;
