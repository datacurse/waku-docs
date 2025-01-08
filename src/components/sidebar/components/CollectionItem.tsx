'use client'

import { SidebarItemProps } from '../types';
import { buildPath } from '../utils';
import { IconWrapper } from './IconWrapper';
import { SidebarItemComponent } from './SidebarItemComponent';

export const CollectionItem = ({ item, depth = 0, parentPath = '' }: SidebarItemProps) => {
  const currentPath = buildPath(parentPath, item.slug);

  return (
    <li className="flex flex-col">
      <div className="flex items-center gap-3 px-5 pt-6 pb-1.5 text-xs tracking-wide font-semibold uppercase z-[1] sticky -top-4">
        <IconWrapper Icon={item.icon} />
        <span className="font-bold uppercase text-xs">{item.title}</span>
      </div>
      {item.children && (
        <ul className="flex flex-col gap-y-0.5">
          {item.children.map((child) => (
            <SidebarItemComponent
              key={child.slug}
              item={child}
              depth={depth + 1}
              parentPath={currentPath}
            />
          ))}
        </ul>
      )}
    </li>
  );
};
