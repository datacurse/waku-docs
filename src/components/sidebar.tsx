'use client';

import { cn } from '@udecode/cn';
import { ComponentType } from 'react';
import { Link, useRouter_UNSTABLE as useRouter } from 'waku';
import { sidebarStructure } from '../sidebarStructure';

interface SidebarItem {
  title: string;
  icon?: ComponentType;
  slug: string;
  children?: SidebarItem[];
  type: 'collection' | 'space' | 'page';
}

function CollectionItem({
  item,
  depth = 0,
  parentPath = '',
}: {
  item: SidebarItem;
  depth?: number;
  parentPath?: string;
}) {
  const currentPath = parentPath ? `${parentPath}/${item.slug}` : item.slug;

  return (
    <li className="flex flex-col">
      <div className="py-[6px] px-5 text-text">
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
}

function SpaceItem({
  item,
  depth = 0,
  parentPath = '',
}: {
  item: SidebarItem;
  depth?: number;
  parentPath?: string;
}) {
  const router = useRouter();
  const Icon = item.icon;
  const currentPath = parentPath ? `${parentPath}/${item.slug}` : item.slug;
  const isActive = router.path === `/${currentPath}`;

  return (
    <li className="flex flex-col">
      <Link
        to={`/${currentPath}`}
        className={cn(
          "transition-colors cursor-pointer py-[6px] flex items-center gap-2 pl-5 pr-[6px] text-sm",
          isActive
            ? "text-text-accent font-semibold hover:bg-surface-accent"
            : "hover:bg-surface hover:text-text text-text-muted",
          depth > 1
            ? [
              "rounded-r-md",
              isActive ? "border-l border-border-accent" : "border-l border-border"
            ]
            : "rounded-md"
        )}
      >
        {Icon && <Icon />}
        <span>{item.title}</span>
      </Link>
      {item.children && (
        <ul className="flex flex-col gap-y-0.5 ms-5 my-2">
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
}

function PageItem({
  item,
  depth = 0,
  parentPath = '',
}: {
  item: SidebarItem;
  depth?: number;
  parentPath?: string;
}) {
  const router = useRouter();
  const currentPath = parentPath ? `${parentPath}/${item.slug}` : item.slug;
  const isActive = router.path === `/${currentPath}`;

  return (
    <li className="flex flex-col">
      <Link
        to={`/${currentPath}`}
        className={cn(
          "transition-colors cursor-pointer py-[6px] flex items-center gap-2 pl-5 pr-[6px] text-sm",
          isActive
            ? "text-text-accent font-semibold hover:bg-surface-accent"
            : "hover:bg-surface hover:text-text text-text-muted",
          depth > 1
            ? [
              "rounded-r-md",
              isActive ? "border-l border-border-accent" : "border-l border-border"
            ]
            : "rounded-md"
        )}
      >
        <span>{item.title}</span>
      </Link>
    </li>
  );
}

function SidebarItemComponent({
  item,
  depth = 0,
  parentPath = '',
}: {
  item: SidebarItem;
  depth?: number;
  parentPath?: string;
}) {
  switch (item.type) {
    case 'collection':
      return <CollectionItem item={item} depth={depth} parentPath={parentPath} />;
    case 'space':
      return <SpaceItem item={item} depth={depth} parentPath={parentPath} />;
    case 'page':
      return <PageItem item={item} depth={depth} parentPath={parentPath} />;
  }
}

export function Sidebar() {
  return (
    <aside className="w-72 basis-72 flex-shrink-0 h-screen overflow-y-auto">
      <nav>
        <ul className="flex flex-col gap-y-0.5">
          {sidebarStructure.collections.map((collection) => (
            <SidebarItemComponent
              key={collection.slug}
              item={collection}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
