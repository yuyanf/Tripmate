'use client';

import { PlusIcon } from 'lucide-react';
import { useState } from 'react';

import DestinationCard from './DestinationCard';
import { Button } from './ui/button';

const initialDestinations = [
  {
    id: 0,
    destination: '',
    startDate: '',
    endDate: '',
  },
];

const DestinationForm = () => {
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
      <h2 className='text-xl font-medium tracking-tight'>
        Where do you want to go?
      </h2>
      <ul className='flex flex-col gap-8'>
        {destinations.map((destination, index) => (
          <li key={index}>
            <DestinationCard
              destinations={destinations}
              onDelete={() => deleteDestination(destination.id)}
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

export default DestinationForm;
