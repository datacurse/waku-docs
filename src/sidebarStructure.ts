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
          {
            title: 'GitHub & GitLab Sync',
            children: [
              { title: 'Enabling GitHub Sync' },
              { title: 'Enabling GitLab Sync' },
              { title: 'Content Configuration' },
              { title: 'GitHub Pull Request Preview' },
              { title: 'Commit Messages & Autolink' },
              { title: 'Monorepos' },
              { title: 'Troubleshooting' }
            ]
          }
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
      }
    ]
  }
];
