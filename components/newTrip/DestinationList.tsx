'use client';

import { PlusIcon } from 'lucide-react';
import { ChangeEvent, useEffect, useState } from 'react';
import DestinationInputs from './DestinationInputs';
import { Button } from '../ui/button';
import { Destination, useDestinations } from '@/app/context/destinations';

const DestinationList = () => {
  const { destinations, addDestination } = useDestinations();

  return (
    <div className='flex flex-col gap-6'>
      <ul className='flex flex-col gap-14'>
        {destinations.map((destination, index) => (
          <li key={destination.id}>
            <DestinationInputs
              id={destination.id}
              destination={destination}
              isFirst={index === 0}
            />
          </li>
        ))}
      </ul>
      <Button onClick={addDestination} className='mx-auto mt-6'>
        <PlusIcon className='mr-2 h-5 w-5' />
        Add destination
      </Button>
    </div>
  );
};

export default DestinationList;
