import { Button } from './ui/button';

interface AnimatedHeaderProp {
  label: string;
}

export function AnimatedHeader({ label }: AnimatedHeaderProp) {
  return (
    <div className='flex justify-center m-8'>
      <Button className='bg-transparent text-white  hover:bg-transparent border-2 rounded-xl label'>
        {label}
      </Button>
    </div>
  );
}
