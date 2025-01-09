'use client';

import { ReactNode } from 'react';

export const Description = ({ children }: { children?: ReactNode }) => {
  return (
    <h1 className="text-lg text-text-muted">
      {children}
    </h1>
  );
}
