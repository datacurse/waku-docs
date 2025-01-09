import { IconType } from 'react-icons';
import { PiHandWavingLight } from 'react-icons/pi';
import { FaBolt } from "react-icons/fa6";
import { LuArrowUpToLine } from "react-icons/lu";
import { IoGitPullRequestOutline } from "react-icons/io5";

export interface SidebarItem {
  title: string;
  slug: string;
  icon?: IconType;
  children?: SidebarItem[];
}
export const sidebarStructure: SidebarItem[] = [
  {
    title: 'Getting Started',
    children: [
      {
        title: 'Welcome',
        icon: PiHandWavingLight,
        slug: "welcome"
      },
      {
        title: 'Quickstart',
        icon: FaBolt,
        slug: "quickstart"
      },
      {
        title: 'Importing Content',
        icon: LuArrowUpToLine,
        slug: "importing-content"
      },
      {
        title: 'GitHub & GitLab Sync',
        icon: IoGitPullRequestOutline,
        children: [
          {
            title: 'Enabling GitHub Sync',
            slug: "enabling-github-sync"
          },
          {
            title: 'Enabling GitLab Sync',
            slug: "enabling-gitlab-sync"
          },
          {
            title: 'Content Configuration',
            slug: "content-configuration"
          },
          {
            title: 'GitHub Pull Request Preview',
            slug: "github-pull-request-preview"
          },
          {
            title: 'Commit Messages & Autolink',
            slug: "commit-messages-and-autolink"
          },
          {
            title: 'Monorepos',
            slug: "monorepos"
          },
          {
            title: 'Troubleshooting',
            slug: "troubleshooting"
          },
        ],
        slug: "github-and-gitlab-sync"
      }
    ],
    slug: "getting-started"
  },
  {
    title: 'Creating Content',
    children: [
      {
        title: 'Formatting Your Content',
        icon: PiHandWavingLight,
        children: [
          {
            title: 'Inline Content',
            slug: "inline-content"
          },
          {
            title: 'Markdown',
            slug: "markdown"
          }
        ],
        slug: "formatting-your-content"
      },
      {
        title: 'Content Structure',
        icon: PiHandWavingLight,
        children: [
          {
            title: 'Spaces',
            slug: "spaces"
          },
          {
            title: 'Pages',
            slug: "pages"
          },
          {
            title: 'Collections',
            slug: "collections"
          }
        ],
        slug: "content-structure"
      },
      {
        title: 'Blocks',
        icon: PiHandWavingLight,
        children: [
          {
            title: 'Paragraphs',
            slug: "paragraphs"
          },
          {
            title: 'Headings',
            slug: "headings"
          },
          {
            title: 'Unordered lists',
            slug: "unordered-lists"
          },
          {
            title: 'Ordered lists',
            slug: "ordered-lists"
          },
          {
            title: 'Task lists',
            slug: "task-lists"
          },
          {
            title: 'Hints',
            slug: "hints"
          },
          {
            title: 'Quotes',
            slug: "quotes"
          },
          {
            title: 'Code blocks',
            slug: "code-blocks"
          },
          {
            title: 'Files',
            slug: "files"
          },
          {
            title: 'Images',
            slug: "images"
          },
          {
            title: 'Empedded URLs',
            slug: "empedded-urls"
          },
          {
            title: 'Tables',
            slug: "tables"
          },
          {
            title: 'Cards',
            slug: "cards"
          },
          {
            title: 'Tabs',
            slug: "tabs"
          },
          {
            title: 'Expandable',
            slug: "expandable"
          },
          {
            title: 'Stepper',
            slug: "stepper"
          },
          {
            title: 'Drawings',
            slug: "drawings"
          },
          {
            title: 'Math & TeX',
            slug: "math-and-tex"
          },
          {
            title: 'Page links',
            slug: "page-links"
          },
        ],
        slug: "blocks"
      },
      {
        title: 'Reusable content',
        icon: LuArrowUpToLine,
        slug: "reusable-content"
      },
      {
        title: 'Broken links',
        icon: LuArrowUpToLine,
        slug: "broken-links"
      },
      {
        title: 'Searching content',
        icon: PiHandWavingLight,
        children: [
          {
            title: 'Search & Quich find',
            slug: "search-and-quich-find"
          },
          {
            title: 'GidBook AI',
            slug: "gidbook-ai"
          },
        ],
        slug: "searching-content"
      },
      {
        title: 'OpenAPI',
        icon: PiHandWavingLight,
        children: [
          {
            title: 'Support for CI/CD with API blocks',
            slug: "support-for-cicd-with-api-blocks"
          },
        ],
        slug: "openapi"
      },
      {
        title: 'Writing with GitBook AI',
        icon: LuArrowUpToLine,
        slug: "writing-with-gitbook-ai"
      },
      {
        title: 'Version control',
        icon: LuArrowUpToLine,
        slug: "version-control"
      },
    ],
    slug: "creating-content"
  },
  {
    title: 'PUBLISHING DOCUMENTATION',
    children: [
      {
        title: 'Publish a docs site',
        icon: PiHandWavingLight,
        children: [
          {
            title: 'Public publishing',
            slug: "public-publishing"
          },
          {
            title: 'Private publishing with share links',
            slug: "private-publishing-with-share-links"
          }
        ],
        slug: "publish-a-docs-site"
      },
      {
        title: 'Site structure',
        icon: PiHandWavingLight,
        children: [
          {
            title: 'Content variants',
            slug: "content-variants"
          },
          {
            title: 'Site sections',
            slug: "site-sections"
          },
        ],
        slug: "site-structure"
      },
      {
        title: 'Site customization',
        icon: LuArrowUpToLine,
        slug: "site-customization"
      },
      {
        title: 'Set a custom domain',
        icon: LuArrowUpToLine,
        slug: "set-a-custom-domain"
      },
      {
        title: 'Site settings',
        icon: LuArrowUpToLine,
        slug: "site-settings"
      },
      {
        title: 'Site insights',
        icon: LuArrowUpToLine,
        slug: "site-insights"
      },
      {
        title: 'Site redirects',
        icon: LuArrowUpToLine,
        slug: "site-redirects"
      },
      {
        title: 'Visitor Authentication',
        icon: PiHandWavingLight,
        children: [
          {
            title: 'Implement Visitor Authentication using Node',
            slug: "implement-visitor-authentication-using-node"
          },
          {
            title: 'Implement Visitor Authentication using Next.js and Clerk',
            slug: "implement-visitor-authentication-using-nextjs-and-clerk"
          },
          {
            title: 'Implement Visitor Authentication using Node and AuthO',
            slug: "implement-visitor-authentication-using-node-and-autho"
          },
          {
            title: 'Implement Visitor Authentication using Node and Okta',
            slug: "implement-visitor-authentication-using-node-and-okta"
          },
          {
            title: 'Implement Visitor Authentication using Node and Azure AD',
            slug: "implement-visitor-authentication-using-node-and-azure-ad"
          },
        ],
        slug: "visitor-authentication"
      },
      {
        title: 'OpenAPI',
        icon: PiHandWavingLight,
        children: [
          {
            title: 'Support for CI/CD with API blocks',
            slug: "support-for-cicd-with-api-blocks"
          },
        ],
        slug: "openapi"
      },
      {
        title: 'Writing with GitBook AI',
        icon: LuArrowUpToLine,
        slug: "writing-with-gitbook-ai"
      },
      {
        title: 'Version control',
        icon: LuArrowUpToLine,
        slug: "version-control"
      },
    ],
    slug: "publishing-documentation"
  },
  {
    title: 'COLLABORATION',
    children: [
      {
        title: 'Live edits',
        icon: PiHandWavingLight,
        slug: "live-edits"
      },
      {
        title: 'Change requests',
        icon: FaBolt,
        slug: "change-requests"
      },
      {
        title: 'PDF export',
        icon: LuArrowUpToLine,
        slug: "pdf-export"
      },
      {
        title: 'Inviting your team',
        icon: LuArrowUpToLine,
        slug: "inviting-your-team"
      },
      {
        title: 'Comments',
        icon: LuArrowUpToLine,
        slug: "comments"
      },
      {
        title: 'Notifications',
        icon: LuArrowUpToLine,
        slug: "notifications"
      },
    ],
    slug: "collaboration"
  },
  {
    title: 'INTEGRATIONS',
    children: [
      {
        title: 'Install and manage integrations',
        icon: PiHandWavingLight,
        slug: "install-and-manage-integrations"
      },
      {
        title: 'GitHub Copilot',
        icon: FaBolt,
        slug: "github-copilot"
      },
    ],
    slug: "integrations"
  }, {
    title: 'ACCOUNT MANAGEMENT',
    children: [
      {
        title: 'Choose your plan',
        icon: IoGitPullRequestOutline,
        children: [
          {
            title: 'Legacy pricing',
            slug: "legacy-pricing"
          },
          {
            title: 'Sponsored site plan',
            slug: "sponsored-site-plan"
          },
          {
            title: 'Apply for the Community plan',
            slug: "apply-for-the-community-plan"
          },
          {
            title: 'Billing policy',
            slug: "billing-policy"
          },
        ],
        slug: "choose-your-plan"
      },
      {
        title: 'Subscription cancellations',
        icon: PiHandWavingLight,
        slug: "subscription-cancellations"
      },
      {
        title: 'Personal settings',
        icon: FaBolt,
        slug: "personal-settings"
      },
      {
        title: 'Organization settings',
        icon: LuArrowUpToLine,
        slug: "organization-settings"
      },
      {
        title: 'Member management',
        icon: LuArrowUpToLine,
        slug: "member-management"
      },
      {
        title: 'SSO & SAML',
        icon: LuArrowUpToLine,
        slug: "sso-and-saml"
      },
    ],
    slug: "account-management"
  },
  {
    title: 'RESOURCES',
    children: [
      {
        title: 'GitBook UI',
        icon: PiHandWavingLight,
        slug: "gitbook-ui"
      },
      {
        title: 'Keyboard shortcuts',
        icon: FaBolt,
        slug: "keyboard-shortcuts"
      },
      {
        title: 'Glossary',
        icon: LuArrowUpToLine,
        slug: "glossary"
      },
    ],
    slug: "resources"
  },
];
