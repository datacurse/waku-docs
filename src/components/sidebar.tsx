'use client';

import { cn } from '@udecode/cn';
import { ComponentType, useEffect, useState, useRef } from 'react';
import { Link, useRouter_UNSTABLE as useRouter } from 'waku';
import { sidebarStructure } from '../sidebarStructure';
import { FaChevronRight } from "react-icons/fa6";

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
  const currentPath = parentPath ? `${parentPath}/${item.slug}` : item.slug;
  const contentRef = useRef<HTMLUListElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  // Check if current path or any child path is active
  const isActive = router.path === `/${currentPath}`;
  const isChildActive = item.children?.some(child => {
    const childPath = currentPath ? `${currentPath}/${child.slug}` : child.slug;
    return router.path === `/${childPath}`;
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const Icon = item.icon;

  // Update height when content changes
  useEffect(() => {
    if (contentRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setContentHeight(entry.contentRect.height);
        }
      });

      resizeObserver.observe(contentRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

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
          "transition-colors py-[6px] flex items-center gap-2 pl-5 pr-3 text-sm",
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
          {Icon && <Icon />}
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
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: isOpen ? `${contentHeight}px` : '0px' }}
        >
          <ul
            ref={contentRef}
            className="flex flex-col gap-y-0.5 ms-5 my-2"
          >
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
