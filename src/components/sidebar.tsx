'use client'

import { cn } from '@udecode/cn';
import { ComponentType } from 'react';
import { Link } from 'waku';
import { sidebarStructure } from '../sidebarStructure';

interface SidebarItem {
  title: string;
  icon?: ComponentType;
  slug: string;
  children?: SidebarItem[];
  type: 'collection' | 'space' | 'page';
}

function CollectionHeader({ title }: { title: string }) {
  return (
    <div className="py-[6px] px-5 text-black">
      <span className="font-bold uppercase text-xs">
        {title}
      </span>
    </div>
  );
}

function SidebarItemComponent({
  item,
  depth = 0,
  parentPath = ''
}: {
  item: SidebarItem;
  depth?: number;
  parentPath?: string;
}) {
  const Icon = item.icon;
  const currentPath = parentPath ? `${parentPath}/${item.slug}` : item.slug;

  if (item.type === 'collection') {
    return (
      <li className="flex flex-col">
        <CollectionHeader title={item.title} />
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

  return (
    <li className="flex flex-col">
      <Link
        to={`/${currentPath}`}
        className={cn(
          "hover:bg-[#f6f6f6] hover:text-[#33353b] transition-colors cursor-pointer py-[6px] flex items-center gap-2 pl-5 pr-[6px] text-sm",
          depth > 1 ? [
            "before:border-l before:border-dark/3 dark:before:border-light/2",
            "before:absolute before:left-[-1px] before:top-0 before:h-full relative",
            "rounded-r-md"
          ] : "rounded-md"
        )}
      >
        {item.type === 'space' && Icon && (
          <Icon />
        )}
        <span>
          {item.title}
        </span>
      </Link>
      {item.children && (
        <ul className={cn(
          "flex flex-col gap-y-0.5",
          depth > 0 && "ms-5 my-2 border-l border-dark/3 dark:border-light/2"
        )}>
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

export function Sidebar() {
  return (
    <aside className="w-72 basis-72 flex-shrink-0 h-screen overflow-y-auto text-[#56585e]">
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
