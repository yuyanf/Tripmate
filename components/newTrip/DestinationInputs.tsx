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

interface DestinationFormProps {
  destinations: any[];
  onDelete: (id: number) => void;
  id: number;
  isFirst: boolean;
}

const DestinationInputs = ({
  destinations,
  onDelete,
  id,
  isFirst,
}: DestinationFormProps) => {
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
                  onClick={() => onDelete(id)}
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
      <Input placeholder='Search destination' Icon={IoSearchOutline} />
      <div className='flex gap-3'>
        <DatePicker placeholder='Start date' />
        <DatePicker placeholder='End date' />
      </div>
    </div>
  );
};

export default DestinationInputs;
