import { ComponentType } from 'react';
import { sidebarStructure } from '../sidebarStructure'; // adjust path as needed

interface SidebarItem {
  title: string;
  icon?: ComponentType;
  slug: string;
  children?: SidebarItem[];
  type: 'collection' | 'space' | 'page';
}

function SidebarItemComponent({ item, depth = 0 }: { item: SidebarItem; depth?: number }) {
  const Icon = item.icon;

  return (
    <li className="flex flex-col">
      <div className={`flex items-center gap-2 pl-${depth * 4}`}>
        {item.type === 'space' && Icon && (
          <Icon />
        )}
        <span className={item.type === 'collection' ? 'font-bold uppercase' : ''}>
          {item.title}
        </span>
      </div>

      {item.children && (
        <ul className="flex flex-col">
          {item.children.map((child) => (
            <SidebarItemComponent
              key={child.slug}
              item={child}
              depth={depth + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-50 overflow-y-auto">
      <nav>
        <ul className="flex flex-col gap-1 p-4">
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
