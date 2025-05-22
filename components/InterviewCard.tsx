import React from 'react';        

const InterviewCard = ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
} : InterviewCard) => {
  return <section className='flex flex-col gap-6 mt-8'>
    <h2>Your Interviews</h2>
    <div className='interviews-section'>
      <p>You haven&apos;t scheduled any interviews yet.</p>
    </div>
  </section>;
};

export default InterviewCard;
