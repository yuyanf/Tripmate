import Image from 'next/image';

import TripForm from '@/components/TripForm';

export default function Home() {
  return (
    <main className='flex h-screen items-center justify-center'>
      <TripForm />
    </main>
  );
}
