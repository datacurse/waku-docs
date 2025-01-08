'use client'
import { sidebarStructure } from '../../sidebarStructure';
import { SidebarItemComponent } from './components/SidebarItemComponent';

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
