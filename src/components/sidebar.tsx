'use client'

import { sidebarStructure } from "../sidebarStructure";
import { generateSlug } from "./generateSlug";
import { useState, useEffect, JSX } from 'react';
import { Link, useRouter_UNSTABLE as useRouter } from 'waku';
import { cn } from '@udecode/cn';
import { FaChevronRight } from "react-icons/fa6";
import { IconType } from 'react-icons';

export function Sidebar() {
  return (
    <aside className="w-72 basis-72 flex-shrink-0 h-screen overflow-y-auto">
      <nav>
        <ul className="flex flex-col gap-y-0.5">
          {sidebarStructure.map(item => (
            <SidebarItem key={generateSlug(item.title)} item={item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

interface SidebarItemData {
  title: string;
  icon?: IconType;
  children?: SidebarItemData[];
}

const CollectionHeader = ({ icon: Icon, title }: {
  icon?: IconType | undefined;
  title: string;
}) => (
  <div className="flex items-center gap-3 px-5 pt-6 pb-1.5 sticky -top-4 z-[1]">
    {Icon && <Icon className="h-5 w-5 text-icon" />}
    <span className="font-bold uppercase text-xs tracking-wide">{title}</span>
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

const ExpandButton = ({ isExpanded, onClick, isActive }: { isExpanded: boolean; onClick: (e: React.MouseEvent) => void; isActive: boolean }) => (
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

export function SidebarItem({ item, path = '', depth = 0 }: {
  item: SidebarItemData;
  path?: string;
  depth?: number;
}): JSX.Element {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const currentSlug = generateSlug(item.title);
  const fullPath = path ? `${path}/${currentSlug}` : currentSlug;
  const isActive = router.path === `/${fullPath}`;

  const isChildActive = (children?: SidebarItemData[]): boolean => {
    return children?.some(child => {
      const childSlug = generateSlug(child.title);
      const childPath = path ? `${path}/${currentSlug}/${childSlug}` : `${currentSlug}/${childSlug}`;
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
      <li className="flex flex-col">
        <CollectionHeader icon={item.icon} title={item.title} />
        {item.children && (
          <ul className="flex flex-col gap-y-0.5">
            {item.children.map(child => (
              <SidebarItem
                key={generateSlug(child.title)}
                item={child}
                path={fullPath}
                depth={depth + 1}
              />
            ))}
          </ul>
        )}
      </li>
    );
  }

  // Base styles for all non-collection items
  const baseItemClasses = cn(
    "flex items-center gap-2 py-1.5 pl-5 pr-1.5 text-sm",
    "transition-colors",
    isActive ? "text-text-accent font-semibold hover:bg-surface-accent" : "text-text-muted hover:bg-surface hover:text-text",
    // Simple rounded corners based on depth
    depth === 1 ? "rounded-md" : "rounded-r-md",
    // Simple border for nested items
    depth > 1 && (isActive ? "border-l border-border-accent" : "border-l border-border")
  );

  // Items with children
  if (item.children) {
    return (
      <li className="flex flex-col">

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
            <ul className="flex flex-col gap-y-0.5 ms-5 my-2">
              {item.children.map(child => (
                <SidebarItem
                  key={generateSlug(child.title)}
                  item={child}
                  path={fullPath}
                  depth={depth + 1}
                />
              ))}
            </ul>
          </div>
        </div>
      </li>
    );
  }

  // Leaf nodes (no children)
  return (
    <li>
      <Link to={`/${fullPath}`} className={baseItemClasses}>
        <ItemIcon icon={item.icon} isActive={isActive} />
        <span>{item.title}</span>
      </Link>
    </li>
  );
}
