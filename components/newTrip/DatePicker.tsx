'use client';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useDestinations } from '@/context/destinations';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface Prop {
  placeholder: string;
  id: number;
  type: 'start' | 'end';
}

export function DatePicker({ placeholder, id, type }: Prop) {
  const [date, setDate] = useState<Date>();
  const { updateStartDate, updateEndDate } = useDestinations();

  const handleSelect = (date: Date | undefined) => {
    setDate(date);

    if (!date) return;

    if (type === 'start') {
      updateStartDate(id, date);
    } else {
      updateEndDate(id, date);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {date ? format(date, 'PPP') : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={handleSelect}
          initialFocus
          fromDate={new Date()}
        />
      </PopoverContent>
    </Popover>
  );
}
