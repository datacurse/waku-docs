import { ComponentType } from 'react';
import { PiHandWavingLight } from "react-icons/pi";

interface SidebarItem {
  title: string;
  icon?: ComponentType;
  slug: string;
  children?: SidebarItem[];
  isExpanded?: boolean;
  type: 'collection' | 'space' | 'page';
}

export const sidebarStructure = {
  collections: [
    {
      title: "GETTING STARTED",
      type: 'collection',
      slug: 'getting-started',
      children: [
        {
          title: "Welcome",
          type: 'page',
          slug: 'welcome'
        },
        {
          title: "Quickstart",
          type: 'page',
          slug: 'quickstart'
        },
        {
          title: "Importing content",
          type: 'page',
          slug: 'importing-content'
        },
        {
          title: "GitHub & GitLab Sync",
          type: 'space',
          icon: PiHandWavingLight,
          slug: 'github-gitlab-sync',
          isExpanded: true,
          children: [
            {
              title: "Enabling GitHub Sync",
              type: 'page',
              slug: 'enabling-github-sync'
            },
            {
              title: "Enabling GitLab Sync",
              type: 'page',
              slug: 'enabling-gitlab-sync'
            },
            {
              title: "Content configuration",
              type: 'page',
              slug: 'content-configuration'
            },
            {
              title: "GitHub pull request preview",
              type: 'page',
              slug: 'github-pull-request-preview'
            },
            {
              title: "Commit messages & Autolink",
              type: 'page',
              slug: 'commit-messages-autolink'
            },
            {
              title: "Monorepos",
              type: 'page',
              slug: 'monorepos'
            },
            {
              title: "Troubleshooting",
              type: 'page',
              slug: 'troubleshooting'
            }
          ]
        }
      ]
    },
    {
      title: "CREATING CONTENT",
      type: 'collection',
      slug: 'creating-content',
      children: [
        {
          title: "Formatting your content",
          type: 'space',
          icon: PiHandWavingLight,
          slug: 'formatting-your-content'
        },
        {
          title: "Content structure",
          type: 'space',
          icon: PiHandWavingLight,
          slug: 'content-structure',
          isExpanded: true,
          children: [
            {
              title: "Spaces",
              type: 'page',
              slug: 'spaces'
            },
            {
              title: "Pages",
              type: 'page',
              slug: 'pages'
            },
            {
              title: "Collections",
              type: 'page',
              slug: 'collections'
            }
          ]
        },
        {
          title: "Blocks",
          type: 'space',
          icon: PiHandWavingLight,
          slug: 'blocks',
          isExpanded: true,
          children: [
            {
              title: "Paragraphs",
              type: 'page',
              slug: 'paragraphs'
            },
            {
              title: "Headings",
              type: 'page',
              slug: 'headings'
            },
            {
              title: "Unordered lists",
              type: 'page',
              slug: 'unordered-lists'
            }
          ]
        }
      ]
    },
    {
      title: "PLATFORM",
      type: 'collection',
      slug: 'platform',
      children: [
        {
          title: "Introduction",
          type: 'space',
          icon: PiHandWavingLight,
          slug: 'introduction',
          isExpanded: true,
          children: [
            {
              title: "Change Password",
              type: 'page',
              slug: 'change-password'
            },
            {
              title: "Forgot Password",
              type: 'page',
              slug: 'forgot-password'
            },
            {
              title: "Getting Started Checklist",
              type: 'page',
              slug: 'getting-started-checklist'
            },
            {
              title: "Platform Overview",
              type: 'page',
              slug: 'platform-overview'
            },
            {
              title: "Workspaces & Members",
              type: 'page',
              slug: 'workspaces-and-members'
            },
            {
              title: "Integrations",
              type: 'space',
              icon: PiHandWavingLight,
              slug: 'integrations',
              isExpanded: true,
              children: [
                {
                  title: "Stripe",
                  type: 'page',
                  slug: 'stripe'
                },
                {
                  title: "PayPal",
                  type: 'page',
                  slug: 'paypal'
                },
                {
                  title: "Cloudinary",
                  type: 'page',
                  slug: 'cloudinary'
                },
                {
                  title: "Shopify",
                  type: 'page',
                  slug: 'shopify'
                },
                {
                  title: "Facebook Business",
                  type: 'page',
                  slug: 'facebook-business'
                },
                {
                  title: "Calendly",
                  type: 'page',
                  slug: 'calendly'
                },
                {
                  title: "Slack",
                  type: 'page',
                  slug: 'slack'
                },
                {
                  title: "Google Sheets",
                  type: 'page',
                  slug: 'google-sheets'
                },
                {
                  title: "Data Store",
                  type: 'page',
                  slug: 'data-store'
                },
                {
                  title: "Twilio",
                  type: 'page',
                  slug: 'twilio'
                },
                {
                  title: "Signalwire",
                  type: 'page',
                  slug: 'signalwire'
                },
                {
                  title: "Email (SMTP / Gmail)",
                  type: 'page',
                  slug: 'email-smtp-gmail'
                }
              ]
            }
          ]
        },
        {
          title: "Website Chat",
          type: 'page',
          slug: 'website-chat'
        },
        {
          title: "WhatsApp Cloud",
          type: 'page',
          slug: 'whatsapp-cloud'
        }
      ]
    }] as SidebarItem[]
};
