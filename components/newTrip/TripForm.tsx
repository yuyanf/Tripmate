import DestinationList from './DestinationList';
import PeopleInputs from './PeopleInputs';

const TripForm = () => {
  return (
    <div className=' flex flex-col gap-16'>
      <DestinationList />
      <PeopleInputs />
    </div>
  );
};

export default TripForm;
