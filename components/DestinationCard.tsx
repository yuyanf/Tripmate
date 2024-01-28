'use client';

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
import { Button } from './ui/button';

interface DestinationCardProps {
  destinations: any[];
  onDelete: () => void;
}

const DestinationCard = ({ destinations, onDelete }: DestinationCardProps) => {
  return (
    <div className='flex flex-col gap-3 rounded-md border border-gray-200 px-6 py-10 duration-200'>
      <div className='flex items-center justify-between gap-3'>
        <span className='font-semibold text-gray-500'>Going next to</span>
        {destinations.length > 1 && (
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger>
                <Button variant='outline' size='icon' onClick={onDelete}>
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
      <Input placeholder='Search destination' Icon={IoSearchOutline} />
      <div className='flex gap-3'>
        <DatePicker placeholder='Start date' />
        <DatePicker placeholder='End date' />
      </div>
    </div>
  );
};

export default DestinationCard;
