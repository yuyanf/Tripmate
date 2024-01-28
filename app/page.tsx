import TripForm from '@/components/TripForm';

export default function CreatePage() {
  return (
    <main className='mx-auto my-10 max-w-2xl p-6 md:my-40'>
      <h1 className='mb-20 text-center text-3xl font-medium'>
        🌴 Plan your next trip ✈️
      </h1>
      <TripForm />
    </main>
  );
}
