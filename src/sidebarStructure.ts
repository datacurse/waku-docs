import { PiHandWavingLight } from 'react-icons/pi';
import { FaBolt } from "react-icons/fa6";
import { LuArrowUpToLine } from "react-icons/lu";
import { IoGitPullRequestOutline } from "react-icons/io5";

export const sidebarStructure = [
  {
    title: 'Getting Started',
    children: [
      {
        title: 'Welcome',
        icon: PiHandWavingLight
      },
      {
        title: 'Quickstart',
        icon: FaBolt
      },
      {
        title: 'Importing Content',
        icon: LuArrowUpToLine
      },
      {
        title: 'GitHub & GitLab Sync',
        icon: IoGitPullRequestOutline,
        children: [
          { title: 'Enabling GitHub Sync' },
          { title: 'Enabling GitLab Sync' },
          { title: 'Content Configuration' },
          { title: 'GitHub Pull Request Preview' },
          { title: 'Commit Messages & Autolink' },
          { title: 'Monorepos' },
          { title: 'Troubleshooting' },
        ]
      }
    ]
  },
  {
    title: 'Creating Content',
    children: [
      {
        title: 'Formatting Your Content',
        icon: PiHandWavingLight,
        children: [
          { title: 'Inline Content' },
          { title: 'Markdown' }
        ]
      },
      {
        title: 'Content Structure',
        icon: PiHandWavingLight,
        children: [
          { title: 'Spaces' },
          { title: 'Pages' },
          { title: 'Collections' }
        ]
      },
      {
        title: 'Blocks',
        icon: PiHandWavingLight,
        children: [
          { title: 'Paragraphs' },
          { title: 'Headings' },
          { title: 'Unordered lists' },
          { title: 'Ordered lists' },
          { title: 'Task lists' },
          { title: 'Hints' },
          { title: 'Quotes' },
          { title: 'Code blocks' },
          { title: 'Files' },
          { title: 'Images' },
          { title: 'Empedded URLs' },
          { title: 'Tables' },
          { title: 'Cards' },
          { title: 'Tabs' },
          { title: 'Expandable' },
          { title: 'Stepper' },
          { title: 'Drawings' },
          { title: 'Math & TeX' },
          { title: 'Page links' },
        ]
      },
      {
        title: 'Reusable content',
        icon: LuArrowUpToLine
      },
      {
        title: 'Broken links',
        icon: LuArrowUpToLine
      },
      {
        title: 'Searching content',
        icon: PiHandWavingLight,
        children: [
          { title: 'Search & Quich find' },
          { title: 'GidBook AI' },
        ]
      },
      {
        title: 'OpenAPI',
        icon: PiHandWavingLight,
        children: [
          { title: 'Support for CI/CD with API blocks' },
        ]
      },
      {
        title: 'Writing with GitBook AI',
        icon: LuArrowUpToLine
      },
      {
        title: 'Version control',
        icon: LuArrowUpToLine
      },
    ]
  },
  {
    title: 'PUBLISHING DOCUMENTATION',
    children: [
      {
        title: 'Publish a docs site',
        icon: PiHandWavingLight,
        children: [
          { title: 'Public publishing' },
          { title: 'Private publishing with share links' }
        ]
      },
      {
        title: 'Site structure',
        icon: PiHandWavingLight,
        children: [
          { title: 'Content variants' },
          { title: 'Site sections' },
        ]
      },
      {
        title: 'Site customization',
        icon: LuArrowUpToLine
      },
      {
        title: 'Set a custom domain',
        icon: LuArrowUpToLine
      },
      {
        title: 'Site settings',
        icon: LuArrowUpToLine
      },
      {
        title: 'Site insights',
        icon: LuArrowUpToLine
      },
      {
        title: 'Site redirects',
        icon: LuArrowUpToLine
      },
      {
        title: 'Visitor Authentication',
        icon: PiHandWavingLight,
        children: [
          { title: 'Implement Visitor Authentication using Node' },
          { title: 'Implement Visitor Authentication using Next.js and Clerk' },
          { title: 'Implement Visitor Authentication using Node and AuthO' },
          { title: 'Implement Visitor Authentication using Node and Okta' },
          { title: 'Implement Visitor Authentication using Node and Azure AD' },
        ]
      },
      {
        title: 'OpenAPI',
        icon: PiHandWavingLight,
        children: [
          { title: 'Support for CI/CD with API blocks' },
        ]
      },
      {
        title: 'Writing with GitBook AI',
        icon: LuArrowUpToLine
      },
      {
        title: 'Version control',
        icon: LuArrowUpToLine
      },
    ]
  },
  {
    title: 'COLLABORATION',
    children: [
      {
        title: 'Live edits',
        icon: PiHandWavingLight
      },
      {
        title: 'Change requests',
        icon: FaBolt
      },
      {
        title: 'PDF export',
        icon: LuArrowUpToLine
      },
      {
        title: 'Inviting your team',
        icon: LuArrowUpToLine
      },
      {
        title: 'Comments',
        icon: LuArrowUpToLine
      },
      {
        title: 'Notifications',
        icon: LuArrowUpToLine
      },
    ]
  },
  {
    title: 'INTEGRATIONS',
    children: [
      {
        title: 'Install and manage integrations',
        icon: PiHandWavingLight
      },
      {
        title: 'GitHub Copilot',
        icon: FaBolt
      },
    ]
  }, {
    title: 'ACCOUNT MANAGEMENT',
    children: [
      {
        title: 'Choose your plan',
        icon: IoGitPullRequestOutline,
        children: [
          { title: 'Legacy pricing' },
          { title: 'Sponsored site plan' },
          { title: 'Apply for the Community plan' },
          { title: 'Billing policy' },
        ]
      },
      {
        title: 'Subscription cancellations',
        icon: PiHandWavingLight
      },
      {
        title: 'Personal settings',
        icon: FaBolt
      },
      {
        title: 'Organization settings',
        icon: LuArrowUpToLine
      },
      {
        title: 'Member management',
        icon: LuArrowUpToLine
      },
      {
        title: 'SSO & SAML',
        icon: LuArrowUpToLine
      },
    ]
  },
  {
    title: 'RESOURCES',
    children: [
      {
        title: 'GitBook UI',
        icon: PiHandWavingLight
      },
      {
        title: 'Keyboard shortcuts',
        icon: FaBolt
      },
      {
        title: 'Glossary',
        icon: LuArrowUpToLine
      },
    ]
  },
];
