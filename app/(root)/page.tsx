import { Button } from '@/components/ui/button';
import React from 'react';

const page = () => {
  return (
    <>
      {/*Navbar*/}
      <section className='mt-6'>
        <div className='flex justify-between'>
          <span className='ml-18 text-2xl font-medium'>InsightPrep</span>
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
        
      </section>
    </>
  );
};

export default page;
