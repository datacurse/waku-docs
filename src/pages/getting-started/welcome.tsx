import { Link } from 'waku';
import { sidebarStructure } from '../../sidebarStructure';
import { Info } from '../../components/content/Info';
import { IconType } from 'react-icons';

// Types for sidebar structure
interface SidebarItem {
  title: string;
  icon?: IconType;
  children?: SidebarItem[];
}

// Type for breadcrumb items
interface BreadcrumbItem {
  title: string;
  slug: string;
}

// Breadcrumbs component
function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex mb-4 text-sm">
      {items.map((item, index) => (
        <div key={item.slug} className="flex items-center">
          {index > 0 && <span className="mx-2 text-gray-400">/</span>}
          <Link
            to={`/${item.slug}`}
            className="text-blue-600 hover:text-blue-800"
          >
            {item.title}
          </Link>
        </div>
      ))}
    </nav>
  );
}

// Helper function to find an item and build breadcrumbs
function findItemAndBreadcrumbs(
  path: string
): { currentItem: SidebarItem | null; breadcrumbs: BreadcrumbItem[] } {
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];
  let currentItem: SidebarItem | null = null;

  function search(
    items: SidebarItem[],
    depth: number,
    parentSlug: string = ''
  ): boolean {
    for (const item of items) {
      const currentSlug = parentSlug
        ? `${parentSlug}/${item.title.toLowerCase().replace(/\s+/g, '-')}`
        : item.title.toLowerCase().replace(/\s+/g, '-');

      if (segments[depth] === currentSlug || (!segments[depth] && depth === segments.length)) {
        breadcrumbs.push({
          title: item.title,
          slug: currentSlug
        });
        currentItem = item;

        if (depth === segments.length - 1 || (!segments[depth] && !item.children)) {
          return true;
        }

        if (item.children) {
          return search(item.children, depth + 1, currentSlug);
        }
      }

      if (item.children && search(item.children, depth, currentSlug)) {
        breadcrumbs.splice(depth + 1, 0, {
          title: item.title,
          slug: currentSlug
        });
        return true;
      }
    }

    return false;
  }

  search(sidebarStructure, 0);

  return { currentItem, breadcrumbs };
}

interface HomePageProps {
  path: string;
}

export default async function HomePage({ path }: HomePageProps) {
  const { currentItem, breadcrumbs } = findItemAndBreadcrumbs(path);
  const pageTitle = currentItem?.title ?? 'Home';

  return (
    <div className="py-8 px-24">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="text-2xl font-bold mb-4">{pageTitle}</h1>
      <p>
        Waku (wah-ku) or わく means "framework" in Japanese. As the minimal React
        framework, it's designed to accelerate the work of developers at startups
        and agencies building small to medium-sized React projects. These include
        marketing websites, light ecommerce, and web applications. We recommend
        other frameworks for heavy ecommerce or enterprise applications. Waku is a
        lightweight alternative bringing a fun developer experience to the server
        components era. Yes, let's make React development fun again!
      </p>
      <Info message={'text block'} />
      <Link to="/about" className="mt-4 inline-block underline">
        About page
      </Link>
    </div>
  );
}
