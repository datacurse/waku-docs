import { ComponentType } from 'react';
import { PiHandWavingLight } from 'react-icons/pi';

interface SidebarItem {
  title: string;
  icon?: ComponentType;
  slug: string;
  children?: SidebarItem[];
  type: 'collection' | 'space' | 'page';
}

export const sidebarStructure = {
  collections: [
    {
      title: 'GETTING STARTED',
      type: 'collection',
      slug: 'getting-started',
      children: [
        {
          title: 'Welcome',
          icon: PiHandWavingLight,
          type: 'page',
          slug: 'welcome'
        },
        {
          title: 'Quickstart',
          type: 'page',
          slug: 'quickstart'
        },
        {
          title: 'GitHub & GitLab Sunc',
          type: 'space',
          slug: 'git-sync',
          children: [
            {
              title: 'Server Components',
              type: 'page',
              slug: 'server-components'
            },
            {
              title: 'Client Components',
              type: 'page',
              slug: 'client-components'
            },
            {
              title: 'Shared Components',
              type: 'page',
              slug: 'shared-components'
            },
            {
              title: 'Weaving Patterns',
              type: 'page',
              slug: 'weaving-patterns'
            }
          ]
        }
      ]
    },
    {
      title: 'FEATURES',
      type: 'collection',
      slug: 'features',
      children: [
        {
          title: 'Routing & Navigation',
          type: 'space',
          icon: PiHandWavingLight,
          slug: 'routing-navigation',
          children: [
            {
              title: 'File-based Routing',
              type: 'page',
              slug: 'file-based-routing'
            },
            {
              title: 'Pages',
              type: 'page',
              slug: 'pages'
            },
            {
              title: 'Layouts',
              type: 'page',
              slug: 'layouts'
            },
            {
              title: 'Navigation',
              type: 'page',
              slug: 'navigation'
            }
          ]
        },
        {
          title: 'Data & State',
          type: 'page',
          slug: 'data-state'
        },
        {
          title: 'Styling',
          type: 'page',
          slug: 'styling'
        },
        {
          title: 'Static Assets',
          type: 'page',
          slug: 'static-assets'
        },
        {
          title: 'Environment Variables',
          type: 'page',
          slug: 'environment-variables'
        }
      ]
    }
  ] as SidebarItem[]
};
