import { AnimatedHeader } from '@/components/AnimatedHeader';
import { AnimatedText } from '@/components/AnimatedText';
import Footer from '@/components/Footer';
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';
import { Button } from '@/components/ui/button';
import { perks } from '@/constants';

import {
  ArrowBigLeft,
  ArrowRight,
  ArrowRightFromLine,
  Container,
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
            <button className='flex ml-3 p-2.5 rounded-2xl border-1 border-white'>
              <Star className='mr-2' />
              Star on Github
            </button>
          </div>
        </div>
      </section>

      {/*Card Section*/}
      <section>
        <div className='flex justify-center mt-25'>
          <NeonGradientCard className=' flex max-w-sm items-center justify-center text-center'>
            <span className='pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]'>
              Loading...
            </span>
          </NeonGradientCard>
        </div>
      </section>
      {/*Features Section*/}
      <section className='mt-40'>
        <AnimatedHeader label='Features' />
        <div className='flex justify-center'>
          <h3 className='text-4xl'>
            Simple Steps to Prepare{' '}
            <span className='flex justify-around'>for your Interview</span>
          </h3>
        </div>
        <div className=' mx-20'>
          <div className='flex w-full flex-col items-center justify-center py-10 md:py-20'>
            <div className='grid w-full grid-cols-1 divide-x-0 divide-y divide-gray-900 first:border-gray-900 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-3 lg:first:border-none'>
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className='flex flex-col items-start px-4 py-4 md:px-6 lg:px-8 lg:py-6'
                >
                  <div className='flex items-center justify-center'>
                    <perk.icon className='h-8 w-8' />
                  </div>
                  <h3 className='mt-4 text-lg font-medium'>{perk.title}</h3>
                  <p className='mt-2 text-start text-muted-foreground'>
                    {perk.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*Footer*/}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default page;
