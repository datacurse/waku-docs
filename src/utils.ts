import { SidebarItem, sidebarStructure } from "./sidebarStructure";


export const getUrlSlugs = (path: string): string[] => {
  // Remove leading/trailing slashes and split into segments
  return path.replace(/^\/|\/$/g, '').split('/').filter(Boolean);
};

export const findItemByPath = (
  items: SidebarItem[],
  slugPath: string[]
): SidebarItem | undefined => {
  // Handle empty path
  if (!slugPath.length) return undefined;

  let currentItems = items;
  let result: SidebarItem | undefined;

  // Traverse through the slug path
  for (let i = 0; i < slugPath.length; i++) {
    const currentSlug = slugPath[i];

    // First try to find in current level
    result = currentItems.find(item => item.slug === currentSlug);

    // If not found and items have children, search in their children
    if (!result) {
      for (const item of currentItems) {
        if (item.children) {
          result = findItemByPath(item.children, [currentSlug]);
          if (result) break;
        }
      }
    }

    // If we found an item and it has children and we're not at the end of the path,
    // continue searching in its children
    if (result?.children && i < slugPath.length - 1) {
      currentItems = result.children;
    } else {
      // If no children or at end of path, return current result
      return result;
    }
  }

  return result;
};
