'use client';

import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import DestinationInputs from './DestinationInputs';
import { Button } from '../ui/button';

const initialDestinations = [
  {
    id: 0,
    destination: '',
    startDate: '',
    endDate: '',
  },
];

const DestinationList = () => {
  const [destinations, setDestinations] = useState<any[]>(initialDestinations);

  const addDestination = () => {
    setDestinations((prev) => {
      return [
        ...prev,
        { id: prev.length, destination: '', startDate: '', endDate: '' },
      ];
    });
  };

  const deleteDestination = (id: number) => {
    if (destinations.length === 1) return;
    setDestinations((prev) => prev.filter((dest) => dest.id !== id));
  };

  return (
    <div className='flex flex-col gap-6'>
      {/* TODO: create unique indices for each DestinationInputs */}
      <ul className='flex flex-col gap-14'>
        {destinations.map((destination, index) => (
          <li key={index}>
            <DestinationInputs
              id={index}
              isFirst={index === 0}
              destinations={destinations}
              onDelete={deleteDestination}
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
