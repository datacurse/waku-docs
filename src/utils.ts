import { SidebarItem, sidebarStructure } from "./sidebarStructure";


export const getUrlSlugs = (path: string): string[] => {
  // Remove leading/trailing slashes and split into segments
  return path.replace(/^\/|\/$/g, '').split('/').filter(Boolean);
};

export const findTopLevelBySlug = (items: SidebarItem[], targetSlug: string): SidebarItem | undefined => {
  return items.find(item => item.slug === targetSlug);
};

