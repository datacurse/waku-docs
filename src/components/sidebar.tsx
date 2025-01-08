'use client'

import { SidebarItem } from "./SidebarItem";
import { sidebarStructure } from "../sidebarStructure";
import { generateSlug } from "./generateSlug";

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
