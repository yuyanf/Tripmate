import Image from 'next/image';

const HomePage = () => {
  return (
    <main className='mx-auto max-w-7xl px-6'>
      <div className='flex min-h-screen flex-col gap-6 py-10 sm:gap-10'>
        <div className=''>
          <span className='inline-block w-full bg-[url("/plane_sky.jpg")] bg-clip-text text-center text-lg font-bold tracking-wide text-transparent sm:text-xl lg:text-4xl'>
            Tripmate
          </span>
          <h1 className='text-balance bg-[url("/plane_sky.jpg")] bg-clip-text text-center text-4xl font-extrabold leading-none tracking-wide text-transparent sm:text-8xl lg:text-[160px]'>
            Make your travels memorable
          </h1>
        </div>

        <Image
          src='/plane_sky.jpg'
          alt='plane city'
          width={1216}
          height={832}
          priority
          className='aspect-video w-full rounded-3xl object-cover'
        />
      </div>
    </main>
  );
};

export default HomePage;
