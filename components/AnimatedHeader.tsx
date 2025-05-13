import { cn } from '@/lib/utils';
import { AnimatedShinyText } from './magicui/animated-shiny-text';
import { ShineBorder } from './magicui/shine-border';

interface AnimatedHeaderProp {
  label: string;
}

export function AnimatedHeader({ label }: AnimatedHeaderProp) {
  return (
    <div className='flex justify-center border-2'>
      <button>How it works</button>
    </div>
  );
}
