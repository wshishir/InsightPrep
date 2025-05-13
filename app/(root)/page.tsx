import { AnimatedText } from '@/components/AnimatedText';
import { Button } from '@/components/ui/button';
import React from 'react';

const page = () => {
  return (
    <>
      {/*Navbar*/}
      <section className='mt-8'>
        <div className='flex justify-between'>
          <button className='ml-14 text-2xl font-medium cursor-pointer'>
            InsightPrep
          </button>
          <nav className='hidden md:flex gap-6 justify-center w-full text-lg'>
            <a href='#'>Features</a>
            <a href='#'>Pricing</a>
            <a href='#'>Contact</a>
          </nav>
          <Button className='mr-20'>Login</Button>
        </div>
      </section>
      {/*Hero Section*/}
      <section>
        <div>
          <div className='flex mt-28'>
            <AnimatedText />
          </div>
          <div className='flex justify-center mt-4'>
            <h2 className='md:text-6xl'>
              AI-Powered Interview{' '}
              <span className='flex justify-center'>Prepration</span>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
