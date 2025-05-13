import { Button } from './ui/button';

interface AnimatedHeaderProp {
  label: string;
}

export function AnimatedHeader({ label }: AnimatedHeaderProp) {
  return (
    <div className='flex justify-center m-10'>
      <Button className='bg-transparent text-white border-2 rounded-xl label'>
        {label}
      </Button>
    </div>
  );
}
