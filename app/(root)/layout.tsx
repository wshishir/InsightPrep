import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default RootLayout;
