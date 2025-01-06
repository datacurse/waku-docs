import { proxy } from "valtio";

interface SidebarState {
  expandedSpaces: Set<string>;
  currentPath: string | undefined;  // Explicitly allow undefined
}

export const sidebarStore = proxy<SidebarState>({
  expandedSpaces: new Set(),
  currentPath: undefined as string | undefined  // Explicitly type the undefined
});

export const toggleSpace = (spaceSlug: string) => {
  if (sidebarStore.expandedSpaces.has(spaceSlug)) {
    sidebarStore.expandedSpaces.delete(spaceSlug);
  } else {
    sidebarStore.expandedSpaces.add(spaceSlug);
  }
};
