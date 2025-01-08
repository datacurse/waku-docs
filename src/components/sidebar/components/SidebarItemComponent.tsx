'use client'
import { SidebarItemProps } from '../types';
import { CollectionItem } from './CollectionItem';
import { SpaceItem } from './SpaceItem';
import { PageItem } from './PageItem';

export const SidebarItemComponent = (props: SidebarItemProps) => {
  const ItemComponent = {
    collection: CollectionItem,
    space: SpaceItem,
    page: PageItem
  }[props.item.type];

  return <ItemComponent {...props} />;
};
