import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Faqs() {
  return (
    <div className='flex justify-center mt-10 font-light'>
    <Accordion type='single' collapsible className='w-240 '>
      <AccordionItem value='item-1'>
        <AccordionTrigger>
          What is this AI Interview Agent and how does it work?
        </AccordionTrigger>
        <AccordionContent>
          Our AI Interview Agent simulates real-time mock interviews using
          advanced voice AI technology.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Is there a free tier available?</AccordionTrigger>
        <AccordionContent>
          Yes! We this product is freely available to use everywhere.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>
          Can I choose different interview types or job roles?
        </AccordionTrigger>
        <AccordionContent>
          Absolutely! You can select from various interview types (HR,
          technical, behavioral) and specify a job role.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-4'>
        <AccordionTrigger>
          Is my data and conversation history private?
        </AccordionTrigger>
        <AccordionContent>
          Yes. We respect your privacy. All sessions are securely stored and
          only accessible to you.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-5'>
        <AccordionTrigger>
          What technologies are your products build with?
        </AccordionTrigger>
        <AccordionContent>
          All our products are built with a modern tech stack including Next.js,
          Tailwind CSS, TypeScript, and Motion.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  );
}
