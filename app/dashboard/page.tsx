import InterviewCard from '@/components/InterviewCard';
import { dummyInterviews } from '@/constants';
import React from 'react';

const page = () => {
  return <section className='flex flex-col gap-6 mt-8'>
    <h2>Your Interviews</h2>
    <div className='interviews-section'>  
        {dummyInterviews.map((interview) =>(
            <InterviewCard {...interview}/>
        ))}
    </div>
  </section>;
};

export default page;
