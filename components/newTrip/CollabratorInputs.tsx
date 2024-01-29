'use client';

import React, { ChangeEvent } from 'react';
import { Input } from '../ui/iconInput';
import { CiMail } from 'react-icons/ci';
import { useDestinations } from '@/app/context/destinations';

function CollabratorInputs() {
  const { email, updateEmail } = useDestinations();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateEmail(e.currentTarget.value);
  };

  return (
    <div className='flex flex-col gap-6 rounded-md '>
      <h3 className='text-xl font-medium tracking-tight'>
        Invite trip collabrator
      </h3>
      <Input
        className='placeholder:italic'
        placeholder='tripmate@gmail.com'
        type='email'
        Icon={CiMail}
        value={email}
        onChange={handleChange}
      />
    </div>
  );
}

export default CollabratorInputs;
