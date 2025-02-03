'use client'

import type { SidebarItem } from "../sidebarStructure";
import { sidebarStructure } from "../sidebarStructure";
import { useState, useEffect, JSX } from 'react';
import { Link, useRouter_UNSTABLE as useRouter } from 'waku';
import { cn } from '@udecode/cn';
import { FaChevronRight } from "react-icons/fa6";
import { IconType } from 'react-icons';


export function Sidebar() {
  return (
    <div className="relative w-72 basis-72 flex-shrink-0 h-screen">
      {/* Wrapper div with fixed padding to prevent layout shift */}
      <div className="absolute inset-0 pr-4">
        {/* Inner scrollable container with transition */}
        <div className="h-full overflow-y-hidden hover:overflow-y-auto transition-all duration-300 ease-in-out scrollbar scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-scrollbar-thumb scrollbar-track-scrollbar-track">
          {/* Content container with padding to account for scrollbar width */}
          <div className="pr-2">
            {sidebarStructure.map(item => (
              <SidebarItemComponent key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const CollectionHeader = ({ icon: Icon, title }: {
  icon?: IconType | undefined;
  title: string;
}) => (
  <div className="flex items-center gap-3 px-5 pt-6 pb-1.5 sticky -top-4 z-[1]">
    {Icon && <Icon className="h-5 w-5 text-icon" />}
    <span className="font-semibold uppercase text-xs tracking-wide">{title}</span>
  </div>
);

const ItemIcon = ({ icon: Icon, isActive }: {
  icon?: IconType | undefined;
  isActive: boolean;
}) => {
  if (!Icon) return null;
  return (
    <Icon
      className={cn(
        "h-5 w-5",
        isActive ? "text-icon-accent" : "text-icon"
      )}
    />
  );
};

const ExpandButton = ({ isExpanded, onClick, isActive }: {
  isExpanded: boolean;
  onClick: (e: React.MouseEvent) => void;
  isActive: boolean
}) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "h-5 w-5 flex items-center justify-center rounded-full",
      isActive ? "hover:bg-surface-elevated-accent" : "hover:bg-surface-elevated",
      "ml-auto"
    )}
  >
    <FaChevronRight
      className={cn(
        "h-3 w-3 transition-transform duration-300 ease-in-out",
        isExpanded && "rotate-90"
      )}
    />
  </button>
);

export function SidebarItemComponent({ item, path = '', depth = 0 }: {
  item: SidebarItem;
  path?: string;
  depth?: number;
}): JSX.Element {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const fullPath = path ? `${path}/${item.slug}` : item.slug;
  const isActive = router.path === `/${fullPath}`;

  const isChildActive = (children?: SidebarItem[]): boolean => {
    return children?.some(child => {
      const childPath = path ? `${path}/${item.slug}/${child.slug}` : `${item.slug}/${child.slug}`;
      return router.path === `/${childPath}` || (child.children && isChildActive(child.children));
    }) ?? false;
  };

  useEffect(() => {
    if (isActive || (item.children && isChildActive(item.children))) {
      setIsExpanded(true);
    }
  }, [router.path, isActive, item.children]);

  // Collection (top-level) items
  if (depth === 0) {
    return (
      <div className="flex flex-col">
        <CollectionHeader icon={item.icon} title={item.title} />
        {item.children && (
          <div className="flex flex-col gap-y-0.5">
            {item.children.map(child => (
              <SidebarItemComponent
                key={child.slug}
                item={child}
                path={fullPath}
                depth={depth + 1}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Base styles for all non-collection items
  const baseItemClasses = cn(
    "flex items-center gap-2 py-1.5 pl-5 pr-1.5 text-sm",
    "transition-colors",
    isActive ? "text-text-accent font-semibold hover:bg-surface-accent" : "text-text-muted hover:bg-surface hover:text-text",
    depth === 1 ? "rounded-md" : "rounded-r-md",
    depth > 1 && (isActive ? "border-l border-border-accent" : "border-l border-border")
  );

  // Items with children
  if (item.children) {
    return (
      <div className="flex flex-col">
        <Link to={`/${fullPath}`} className={cn(baseItemClasses, "flex justify-between")}>
          <div className="flex items-center gap-2">
            <ItemIcon icon={item.icon} isActive={isActive} />
            <span>{item.title}</span>
          </div>
          <ExpandButton
            isExpanded={isExpanded}
            isActive={isActive}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          />
        </Link>
        <div className={cn(
          "grid transition-all duration-300 ease-in-out",
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}>
          <div className="overflow-hidden">
            <div className="flex flex-col gap-y-0.5 ms-5 my-2">
              {item.children.map(child => (
                <SidebarItemComponent
                  key={child.slug}
                  item={child}
                  path={fullPath}
                  depth={depth + 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Leaf nodes (no children)
  return (
    <div>
      <Link to={`/${fullPath}`} className={baseItemClasses}>
        <ItemIcon icon={item.icon} isActive={isActive} />
        <span>{item.title}</span>
      </Link>
    </div>
  );
}
