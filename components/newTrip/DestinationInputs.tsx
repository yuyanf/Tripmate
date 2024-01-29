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
import { ChangeEvent, useState } from 'react';
import { Destination, useDestinations } from '@/app/context/destinations';

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
  const { destinations, deleteDestination, updateDestination } =
    useDestinations();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Call onUpdateDestination to update the destination field
    updateDestination(id, e.currentTarget.value);
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
      <Input
        placeholder='Search destination'
        Icon={IoSearchOutline}
        value={destination.destination}
        onChange={handleChange}
      />

      <div className='flex gap-3'>
        <DatePicker placeholder='Start date' id={id} type='start' />
        <DatePicker placeholder='End date' id={id} type='end' />
      </div>
    </div>
  );
};

export default DestinationInputs;
