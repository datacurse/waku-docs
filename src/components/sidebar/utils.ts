// src/components/Sidebar/utils/index.ts
import { cn } from '@udecode/cn';

export const buildPath = (parentPath: string, slug: string) =>
  parentPath ? `${parentPath}/${slug}` : slug;

export const getItemStyles = (isActive: boolean, depth: number = 0) => {
  return cn(
    "transition-colors py-[6px] flex items-center gap-2 pl-5 pr-[6px] text-sm",
    isActive
      ? "text-text-accent font-semibold hover:bg-surface-accent"
      : "hover:bg-surface hover:text-text text-text-muted",
    depth > 1
      ? [
        "rounded-r-md",
        isActive ? "border-l border-border-accent" : "border-l border-border"
      ]
      : "rounded-md"
  );
};
