'use client';

import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { BsBalloonHeartFill } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { MdFamilyRestroom } from 'react-icons/md';
import { Button } from '../ui/button';

enum WITH_WHOM {
  COUPLE = 'couple',
  FRIENDS = 'friends',
  FAMILY = 'family',
}

const PeopleInputs = () => {
  const [people, setPeople] = useState(1);
  const [withWhom, setWithWhom] = useState<WITH_WHOM | undefined>(undefined);

  const handleMinusPeople = () => {
    if (people === 1) return;
    if (people === 2) {
      setWithWhom(undefined);
    }

    setPeople((prev) => prev - 1);
  };

  const handlePlusPeople = () => {
    if (people === 1) {
      setWithWhom(WITH_WHOM.FRIENDS);
    }
    setPeople((prev) => prev + 1);
  };

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-6'>
        <h2 className='text-xl font-medium tracking-tight'>
          How many people are going?
        </h2>
        <div className='flex justify-between gap-2 rounded-md border border-gray-200 bg-white p-1'>
          <div className='flex items-center gap-2'>
            <p className='border-border-color flex h-full items-center rounded-md border bg-gray-100 px-4 text-sm font-medium'>
              {people}
            </p>
            <span>{people === 1 ? 'Person' : 'People'}</span>
          </div>

          <div className='flex gap-2'>
            <Button
              className='min-w-[40px]'
              variant='outline'
              size='icon'
              onClick={handleMinusPeople}
            >
              <Minus className='h-3 w-3' />
            </Button>
            <Button
              className='min-w-[40px]'
              variant='outline'
              size='icon'
              onClick={handlePlusPeople}
            >
              <Plus className='h-3 w-3' />
            </Button>
          </div>
        </div>
      </div>

      {people > 1 && (
        <div className='flex flex-col gap-6'>
          <h3 className='text-lg font-medium tracking-tight'>
            Who is traveling with you?
          </h3>
          <div className='flex justify-between gap-2 rounded-md'>
            {people <= 2 && (
              <Button
                className='w-full'
                variant={withWhom === WITH_WHOM.COUPLE ? 'default' : 'outline'}
                onClick={() => setWithWhom(WITH_WHOM.COUPLE)}
              >
                <BsBalloonHeartFill className='mr-2 h-5 w-5' />
                <span>Couple</span>
              </Button>
            )}
            <Button
              className='w-full'
              variant={withWhom === WITH_WHOM.FRIENDS ? 'default' : 'outline'}
              onClick={() => setWithWhom(WITH_WHOM.FRIENDS)}
            >
              <FaUserFriends className='mr-2 h-5 w-5' />
              <span>Friends</span>
            </Button>
            <Button
              className='w-full'
              variant={withWhom === WITH_WHOM.FAMILY ? 'default' : 'outline'}
              onClick={() => setWithWhom(WITH_WHOM.FAMILY)}
            >
              <MdFamilyRestroom className='mr-2 h-5 w-5' />
              <span>Family</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeopleInputs;
