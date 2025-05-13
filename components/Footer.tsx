import { Heart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center border-t border-border px-6 pb-8 pt-16 lg:px-8 lg:pt-32'>
      <div className='absolute -right-1/4 -top-1/3 -z-10 hidden h-72 w-72 rounded-full'></div>
      <div className='absolute -left-1/4 bottom-0 -z-10 hidden h-72 w-72 rounded-full  '></div>

      <div className='grid w-full gap-8 xl:grid-cols-3 xl:gap-8'>
        <div className='flex flex-col items-start justify-start md:max-w-[200px]'>
          <div className='flex items-start text-2xl  font-semibold'>
            InsightPrep
          </div>
          <p className='flex text-sm mt-2 text-gray-400'>
            The ultimate AI-Powered Interview Prepration Guide
          </p>
          <span className='mt-4 flex items-center text-sm text-neutral-200'>
            Made with
            <Heart className='mx-1 h-3.5 w-3.5' />
            by
            <a
              href='https://x.com/shishirtwts'
              target='_blank'
              className='underline ml-1 text-[#786ee8]'
            >
              {' '}
              Shishir{' '}
            </a>
          </span>
        </div>

        <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
          <div className='md:grid md:grid-cols-2 md:gap-8'>
            <div className=''>
              <h3 className='text-base font-medium text-white'>Product</h3>
              <ul className='mt-4 text-sm ' style={{ listStyleType: 'none' }}>
                <li className='mt-2'>
                  <Link
                    href=''
                    className='transition-all duration-300 text-gray-400'
                  >
                    Features
                  </Link>
                </li>
                <li className='mt-2'>
                  <Link
                    href=''
                    className='transition-all duration-300 text-gray-400'
                  >
                    Pricing
                  </Link>
                </li>
                <li className='mt-2'>
                  <Link
                    href=''
                    className='transition-all duration-300 text-gray-400'
                  >
                    How to use
                  </Link>
                </li>
                <li className='mt-2'>
                  <Link
                    href=''
                    className='transition-all duration-300 text-gray-400'
                  >
                    Integration
                  </Link>
                </li>
              </ul>
            </div>
            <div className='mt-10 flex flex-col md:mt-0'>
              <h3 className='text-base font-medium text-white'>Integrations</h3>
              <ul className='mt-4 text-sm' style={{ listStyleType: 'none' }}>
                <li className=''>
                  <Link
                    href=''
                    className='transition-all duration-300 text-gray-400'
                  >
                    Facebook
                  </Link>
                </li>
                <li className='mt-2'>
                  <Link
                    href=''
                    className='transition-all duration-300 text-gray-400'
                  >
                    Instagram
                  </Link>
                </li>
                <li className='mt-2'>
                  <Link
                    href=''
                    className='transition-all duration-300 text-gray-400'
                  >
                    X
                  </Link>
                </li>
                <li className='mt-2'>
                  <Link
                    href=''
                    className='transition-all duration-300 text-gray-400'
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='md:grid md:grid-cols-2 md:gap-8'>
            <div className='mt-10 flex flex-col md:mt-0'>
              <h3 className='text-base font-medium text-white'>Company</h3>
              <ul
                className='mt-4 text-sm text-gray-400'
                style={{ listStyleType: 'none' }}
              >
                <li className=''>
                  <Link
                    href=''
                    className='transition-all duration-300 text-gray-400'
                  >
                    About Us
                  </Link>
                </li>
                <li className='mt-2'>
                  <Link
                    href=''
                    className='transition-all duration-300 text-gray-400'
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className='mt-2'>
                  <Link
                    href=''
                    className='transition-all duration-300 text-gray-400'
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-8 w-full border-t border-border/40 pt-4 md:flex md:items-center md:justify-between md:pt-8'>
        <p className='mt-8 text-sm text-white md:mt-0'>
          &copy; {new Date().getFullYear()} InsightPrep. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
