import { Button } from '../ui/button';
import CollabratorInputs from './CollabratorInputs';
import Collabrator from './CollabratorInputs';
import DestinationList from './DestinationList';
import PeopleInputs from './PeopleInputs';
import { GiPartyPopper } from 'react-icons/gi';

const TripForm = () => {
  return (
    <div className=' flex flex-col gap-16'>
      <DestinationList />
      <PeopleInputs />
      <CollabratorInputs />
      <Button className='mx-auto mt-6'>
        <GiPartyPopper className='mr-2 h-5 w-5' />
        Create trip
      </Button>
    </div>
  );
};

export default TripForm;
