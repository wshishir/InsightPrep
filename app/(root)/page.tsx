'use client';
import { AnimatedHeader } from '@/components/AnimatedHeader';
import { AnimatedText } from '@/components/AnimatedText';
import Faqs from '@/components/Faqs';
import Footer from '@/components/Footer';
import { HeroButton } from '@/components/HeroButton';
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';
import { Testimonals } from '@/components/Testimonals';
import { Button } from '@/components/ui/button';
import { perks } from '@/constants';

import { useRouter } from 'next/navigation';
import React from 'react';

const page = () => {
  const router = useRouter();
  return (
    <>
      {/*Navbar*/}
      <section className='mt-8'>
        <div className='flex justify-between'>
          <button className=' md:ml-14 text-2xl font-medium cursor-pointer ml-4'>
            <span className='text-[#786ee8]'>Insight</span>Prep
          </button>
          <nav className='hidden md:flex gap-6 justify-center w-full text-lg'>
            <a href='#'>Features</a>
            <a href='#'>Pricing</a>
            <a href='#'>Contact</a>
          </nav>
          <Button
            className='mr-20 cursor-pointer hidden md:flex'
            onClick={() => router.push('/sign-in')}
          >
            Login
          </Button>
        </div>
      </section>
      {/*Hero Section*/}
      <section>
        <div>
          <div className='flex md:mt-28 mt-15'>
            <AnimatedText />
          </div>
          <div className='flex justify-center mt-4'>
            <h2 className='md:text-[65px] '>
              AI-Powered Interview
              <span className='flex justify-center'>Prepration</span>
            </h2>
          </div>
          <div className='mt-4 justify-center flex ml-3'>
            <p className=' text-gray-400 md:text-lg '>
              An AI-powered interview agent built with Vapi that conducts and
              analyzes real time mock interviews.
            </p>
          </div>
          <div className='flex justify-center mt-6 '>
            <HeroButton label='Get Started for Free' />
          </div>
        </div>
      </section>

      {/*Card Section*/}
      <section>
        <div className='flex justify-center md:mt-25 mt-15'>
          <NeonGradientCard className=' flex max-w-sm items-center justify-center text-center mx-5 md:mx-auto '>
            <span className='pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]'>
              Loading...
            </span>
          </NeonGradientCard>
        </div>
      </section>
      {/*Features Section*/}
      <section className='mt-40'>
        <AnimatedHeader label='How it works'></AnimatedHeader>
        <div className='flex justify-center mt-5 mx-'>
          <h2 className='md:text-4xl font-medium text-center'>
            Simple Steps to Prepare for your Interview
          </h2>
        </div>
        <div className='mx-20'>
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
                  <p className='mt-2 text-start text-gray-500'>{perk.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*Faqs Section*/}
      <section className='mt-40'>
        <AnimatedHeader label='FAQs' />
        <div className='flex justify-center text-center mt-5'>
          <h2 className='md:text-4xl font-medium'>
            Find answers to common questions
          </h2>
        </div>
        <Faqs />
      </section>

      {/*Testimonials Section*/}
      <section className='mt-25'>
        <AnimatedHeader label='Testimonials'></AnimatedHeader>
        <h2 className='flex justify-center font-medium text-4xl'>
          What our users saying
        </h2>
        <div className='my-17'>
          <Testimonals />
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
