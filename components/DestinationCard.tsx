'use client';

import React from 'react';
import { Input } from '@/components/ui/iconInput';
import { IoSearchOutline } from 'react-icons/io5';
import { DatePicker } from './DatePicker';
import { Button } from './ui/button';

export default function DestinationCard() {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex gap-3'>
        <header>Going next to</header>
        <Button>Delete</Button>
      </div>
      <Input placeholder='Search destination' Icon={IoSearchOutline} />
      <div className='flex gap-3'>
        <DatePicker placeholder='Start date' />
        <DatePicker placeholder='End date' />
      </div>
    </div>
  );
}
