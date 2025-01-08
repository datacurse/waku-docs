'use client'

import { IconComponent } from '../types';
import { cn } from '@udecode/cn';

export const IconWrapper = ({
  Icon,
  className
}: {
  Icon: IconComponent | undefined;
  className?: string | undefined;
}) => {
  if (!Icon) return null;
  return <Icon className={cn("h-5 w-5 text-icon", className)} aria-hidden="true" />;
};
