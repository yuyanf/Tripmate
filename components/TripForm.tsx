'use client';

import React, { useState } from 'react';
import DestinationCard from './DestinationCard';
import { Button } from './ui/button';

const TripForm = () => {
  const [destinationsArray, setDestinationArray] = useState([
    { destination: '', startDate: '', endDate: '' },
  ]);

  const addDestinationCards = () => {
    setDestinationArray((prev) => {
      return [...prev, { destination: '', startDate: '', endDate: '' }];
    });
  };

  return (
    <div className='flex flex-col gap-3'>
      <ul className='flex flex-col gap-16'>
        {destinationsArray.map((destination, index) => (
          <li key={index}>
            <DestinationCard />
          </li>
        ))}
      </ul>

      <Button onClick={addDestinationCards}>Add destination</Button>
    </div>
  );
};

export default TripForm;
