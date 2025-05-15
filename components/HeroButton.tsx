'use client';
import React from 'react';
import { HoverBorderGradient } from '../components/ui/hover-border-gradient';
import { ArrowRight, } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface HeroButtonProp{
    label: string;
}

export function HeroButton({label} : HeroButtonProp) {
    const router = useRouter();
  return (
    <div className='flex justify-center text-center'>
      <HoverBorderGradient
        containerClassName='rounded-full'
        as='button'
        className='text-white  bg-transparent flex items-center space-x-2 cursor-pointer'    
        onClick={() => router.push('/sign-up')}
      >
        <span>{label}</span>
        <ArrowRight/>
      </HoverBorderGradient>
    </div>
  );
}
