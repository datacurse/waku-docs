'use client';

import { cn } from '@udecode/cn';
import { ComponentType, useEffect, useState } from 'react';
import { Link, useRouter_UNSTABLE as useRouter } from 'waku';
import { FaChevronRight } from "react-icons/fa6";
import { sidebarStructure } from '../sidebarStructure';

interface IconProps {
  className?: string;
}

// Properly type the icon component
type IconComponent = ComponentType<IconProps>;

interface SidebarItem {
  title: string;
  icon?: IconComponent;
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
  const Icon = item.icon;

  return (
    <li className="flex flex-col">
      <div className="flex items-center gap-3 px-5 pt-6 pb-1.5 text-xs tracking-wide font-semibold uppercase z-[1] sticky -top-4">
        {Icon && <Icon className={cn("h-4 w-4")} aria-hidden="true" />}
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
  const currentPath = parentPath ? `${parentPath}/${item.slug}` : item.slug;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const Icon = item.icon;

  // Check if current path or any child path is active
  const isActive = router.path === `/${currentPath}`;
  const isChildActive = item.children?.some(child => {
    const childPath = currentPath ? `${currentPath}/${child.slug}` : child.slug;
    return router.path === `/${childPath}`;
  });

  // Update isOpen when path becomes active
  useEffect(() => {
    if (isActive || isChildActive) {
      setIsOpen(true);
    }
  }, [isActive, isChildActive]);

  return (
    <li className="flex flex-col">
      <div
        className={cn(
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
        )}
      >
        <Link
          to={`/${currentPath}`}
          className="flex items-center gap-2 flex-1 cursor-pointer"
        >
          {Icon && <Icon className="h-4 w-4" />}
          <span>{item.title}</span>
        </Link>
        {item.children && item.children.length > 0 && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn('h-5 w-5 flex items-center justify-center rounded-full',
              isActive
                ? 'hover:bg-surface-elevated-accent'
                : 'hover:bg-surface-elevated')}
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
        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out",
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
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
          </div>
        </div>
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
  const Icon = item.icon;

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
        {Icon && <Icon className="h-4 w-4" />}
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
