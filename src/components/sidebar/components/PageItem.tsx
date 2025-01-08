'use client'
// src/components/Sidebar/components/PageItem.tsx
import { Link, useRouter_UNSTABLE as useRouter } from 'waku';
import { SidebarItemProps } from '../types';
import { buildPath, getItemStyles } from '../utils';
import { IconWrapper } from './IconWrapper';

export const PageItem = ({ item, depth = 0, parentPath = '' }: SidebarItemProps) => {
  const router = useRouter();
  const currentPath = buildPath(parentPath, item.slug);
  const isActive = router.path === `/${currentPath}`;

  return (
    <li className="flex flex-col">
      <Link
        to={`/${currentPath}`}
        className={getItemStyles(isActive, depth)}
      >
        <IconWrapper Icon={item.icon} />
        <span>{item.title}</span>
      </Link>
    </li>
  );
};
