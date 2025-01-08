'use client'
// src/components/Sidebar/components/SpaceItem.tsx
import { useState, useEffect } from 'react';
import { Link, useRouter_UNSTABLE as useRouter } from 'waku';
import { SidebarItemProps } from '../types';
import { buildPath, getItemStyles } from '../utils';
import { IconWrapper } from './IconWrapper';

import { ChildrenContainer } from './ChildrenContainer';
import { SidebarItemComponent } from './SidebarItemComponent';
import { cn } from '@udecode/cn';
import { FaChevronRight } from 'react-icons/fa6';

export const SpaceItem = ({ item, depth = 0, parentPath = '' }: SidebarItemProps) => {
  const router = useRouter();
  const currentPath = buildPath(parentPath, item.slug);
  const [isOpen, setIsOpen] = useState(false);

  const isActive = router.path === `/${currentPath}`;
  const isChildActive = item.children?.some(child =>
    router.path === `/${buildPath(currentPath, child.slug)}`
  );

  useEffect(() => {
    if (isActive || isChildActive) {
      setIsOpen(true);
    }
  }, [isActive, isChildActive]);

  return (
    <li className="flex flex-col">
      <div className={getItemStyles(isActive, depth)}>
        <Link
          to={`/${currentPath}`}
          className="flex items-center gap-2 flex-1 cursor-pointer"
        >
          <IconWrapper Icon={item.icon} />
          <span>{item.title}</span>
        </Link>
        {item.children?.length > 0 && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn('h-5 w-5 flex items-center justify-center rounded-full',
              isActive ? 'hover:bg-surface-elevated-accent' : 'hover:bg-surface-elevated')}
          >
            <FaChevronRight
              className={cn(
                "h-3 w-3 transition-transform duration-300 ease-in-out",
                isOpen && "rotate-90"
              )}
            />
          </button>
        )}
      </div>
      {item.children && (
        <ChildrenContainer isOpen={isOpen}>
          {item.children.map((child) => (
            <SidebarItemComponent
              key={child.slug}
              item={child}
              depth={depth + 1}
              parentPath={currentPath}
            />
          ))}
        </ChildrenContainer>
      )}
    </li>
  );
};
