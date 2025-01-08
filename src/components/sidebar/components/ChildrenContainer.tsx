'use client'

import { cn } from '@udecode/cn';

export const ChildrenContainer = ({
  isOpen,
  children
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) => (
  <div className={cn(
    "grid transition-all duration-300 ease-in-out",
    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
  )}>
    <div className="overflow-hidden">
      <ul className="flex flex-col gap-y-0.5 ms-5 my-2">
        {children}
      </ul>
    </div>
  </div>
);
