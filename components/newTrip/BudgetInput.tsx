'use client';

import { useDestinations } from '@/app/context/destinations';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const BudgetOptions = [
  'None',
  'Less than 5000 NOK',
  '5000 - 10.000 NOK',
  '10.000 - 20.000 NOK',
  '20.000 - 40.000 NOK',
  '40.000 - 60.000 NOK',
  '60.000 - 80.000 NOK',
  '80.000 - 100.0000 NOK',
  'More than 100.000 NOK',
];

const BudgetInput = () => {
  const { updateBudget } = useDestinations();

  const handleChange = (budget: string) => {
    updateBudget(budget);
  };

  return (
    <div className='flex flex-col gap-6 rounded-md '>
      <h2 className='text-xl font-medium tracking-tight'>
        How much do you plan to spend on this trip?{' '}
        <span className='text-sm opacity-60'>(optional)</span>
      </h2>
      <Select onValueChange={handleChange}>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Select your budget' />
        </SelectTrigger>
        <SelectContent>
          {BudgetOptions.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default BudgetInput;
