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
              title: 'Enabling GitHub Sync',
              type: 'page',
              slug: 'enabling-githug-sync'
            },
            {
              title: 'Enabling GitLab Sync',
              type: 'page',
              slug: 'enabling-gitlab-sync'
            },
            {
              title: 'Content configuration',
              type: 'page',
              slug: 'content-configuration'
            },
            {
              title: 'GitHub pull request preview',
              type: 'page',
              slug: 'github-pull-request-preview'
            },
            {
              title: 'Commit messages & Autolink',
              type: 'page',
              slug: 'commits'
            },
            {
              title: 'Monorepos',
              type: 'page',
              slug: 'monorepos'
            },
            {
              title: 'Troubleshooting',
              type: 'page',
              slug: 'troubleshooting'
            },
          ]
        }
      ]
    },
    {
      title: 'CREATING CONTENT',
      type: 'collection',
      slug: 'creating-content',
      children: [
        {
          title: 'Formatting your content',
          type: 'space',
          icon: PiHandWavingLight,
          slug: 'formatting-your-content',
          children: [
            {
              title: 'Inline content',
              type: 'page',
              slug: 'inline-content'
            },
            {
              title: 'Markdown',
              type: 'page',
              slug: 'markdown'
            },
          ]
        },
        {
          title: 'Content structure',
          type: 'space',
          icon: PiHandWavingLight,
          slug: 'content-structure',
          children: [
            {
              title: 'Spaces',
              type: 'page',
              slug: 'spaces'
            },
            {
              title: 'Pages',
              type: 'page',
              slug: 'pages'
            },
            {
              title: 'Collections',
              type: 'page',
              slug: 'collections'
            },
          ]
        },
        {
          title: 'Blocks',
          type: 'space',
          icon: PiHandWavingLight,
          slug: 'blocks',
          children: [
            {
              title: 'Paragraphs',
              type: 'page',
              slug: 'paragraphs'
            },
            {
              title: 'Headings',
              type: 'page',
              slug: 'headings'
            },
            {
              title: 'Unordered lists',
              type: 'page',
              slug: 'unordered-lists'
            },
            {
              title: 'Ordered lists',
              type: 'page',
              slug: 'ordered-lists'
            },
            {
              title: 'Task lists',
              type: 'page',
              slug: 'task-lists'
            },
            {
              title: 'Hints',
              type: 'page',
              slug: 'hints'
            },
            {
              title: 'Quotes',
              type: 'page',
              slug: 'quotes'
            },
            {
              title: 'Code blocks',
              type: 'page',
              slug: 'code-blocks'
            },
            {
              title: 'Files',
              type: 'page',
              slug: 'files'
            },
            {
              title: 'Images',
              type: 'page',
              slug: 'images'
            },
            {
              title: 'Embedded URLs',
              type: 'page',
              slug: 'embedded-urls'
            },
            {
              title: 'Tables',
              type: 'page',
              slug: 'tables'
            },
            {
              title: 'Cards',
              type: 'page',
              slug: 'cards'
            },
            {
              title: 'Tabs',
              type: 'page',
              slug: 'tabs'
            },
            {
              title: 'Expandable',
              type: 'page',
              slug: 'expandable'
            },
            {
              title: 'Stepper',
              type: 'page',
              slug: 'stepper'
            },
            {
              title: 'Drawings',
              type: 'page',
              slug: 'drawings'
            },
            {
              title: 'Math & TeX',
              type: 'page',
              slug: 'math-and-tex'
            },
            {
              title: 'Page links',
              type: 'page',
              slug: 'page-links'
            },
          ]
        },
        {
          title: 'Reusable content',
          type: 'page',
          slug: 'reusable-content'
        },
        {
          title: 'Broken links',
          type: 'page',
          slug: 'broken-links'
        },
        {
          title: 'Searching content',
          type: 'space',
          icon: PiHandWavingLight,
          slug: 'searching-content',
          children: [
            {
              title: 'Search & Quick find',
              type: 'page',
              slug: 'seach-and-quick-find'
            },
            {
              title: 'GitBook AI',
              type: 'page',
              slug: 'gitbook-ai'
            },
          ]
        },
        {
          title: 'OpenAPI',
          type: 'space',
          icon: PiHandWavingLight,
          slug: 'openapi',
          children: [
            {
              title: 'Support for CI/CD with API blocks',
              type: 'page',
              slug: 'support-for-ci-cd-with-api-blocks'
            },
          ]
        },
        {
          title: 'Writing with GitBook AI',
          type: 'page',
          slug: 'writing-with-gitbook-ai'
        },
        {
          title: 'Version control',
          type: 'page',
          slug: 'version-control'
        }
      ]
    }
  ] as SidebarItem[]
};
