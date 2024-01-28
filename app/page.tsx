import DestinationForm from '@/components/DestinationForm';
import PeopleForm from '@/components/PeopleForm';

export default function Home() {
  return (
    <main className='mx-auto my-40 max-w-2xl p-6'>
      <h1 className='mb-12 text-center text-3xl font-medium'>
        🌴 Plan your next trip ✈️
      </h1>

      <div className='flex flex-col gap-20'>
        <DestinationForm />
        <PeopleForm />
      </div>
    </main>
  );
}
