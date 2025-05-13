import { AnimatedText } from '@/components/AnimatedText';
import { Button } from '@/components/ui/button';
import {
  ArrowBigLeft,
  ArrowRight,
  ArrowRightFromLine,
  Star,
} from 'lucide-react';
import React from 'react';

const page = () => {
  return (
    <>
      {/*Navbar*/}
      <section className='mt-8'>
        <div className='flex justify-between'>
          <button className='ml-14 text-2xl font-medium cursor-pointer'>
            <span className='text-[#786ee8]'>Insight</span>Prep
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
            <h2 className='md:text-[65px]'>
              AI-Powered Interview
              <span className='flex justify-center'>Prepration</span>
            </h2>
          </div>
          <div className='mt-4 justify-center flex'>
            <p className=' text-gray-400 text-lg'>
              An AI-powered interview agent built with Vapi that conducts and
              analyzes real time mock interviews.
            </p>
          </div>
          <div className='flex justify-center mt-6 '>
            <button className='bg-[#786ee8] hover:bg-[#786ee8e6] text-white cursor-pointer rounded-2xl flex p-2.5'>
              Get Started for free <ArrowRight className='ml-1.5' />
            </button>
            <button className='flex ml-3 p-2.5 rounded-2xl border-1 border-white'  >
              <Star className='mr-2'/>
              Star on Github
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
