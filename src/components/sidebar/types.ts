import { ComponentType } from 'react';

export type IconComponent = ComponentType<{ className?: string | undefined }>;

export interface SidebarItemType {
  title: string;
  icon?: IconComponent;
  slug: string;
  children?: SidebarItemType[];
  type: 'collection' | 'space' | 'page';
}

export interface SidebarItemProps {
  item: SidebarItemType;
  depth?: number;
  parentPath?: string;
}
