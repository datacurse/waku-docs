import { Link } from 'waku';
import { IconType } from 'react-icons';
import { Info } from '../../../components/content/Info';
import { sidebarStructure } from '../../../sidebarStructure';

interface SidebarItem {
  title: string;
  icon?: IconType;
  children?: SidebarItem[];
}

interface BreadcrumbItem {
  title: string;
  slug: string;
}

interface NavigationInfo {
  breadcrumbs: BreadcrumbItem[];
  currentPageTitle: string;
}

function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (items.length === 0) return null;

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

function findItemInStructure(
  structure: SidebarItem[],
  targetSlug: string
): SidebarItem | null {
  for (const item of structure) {
    // Convert current item's title to slug format for comparison
    const itemSlug = item.title.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and');

    if (itemSlug === targetSlug) {
      return item;
    }

    if (item.children) {
      const found = findItemInStructure(item.children, targetSlug);
      if (found) return found;
    }
  }
  return null;
}

function getNavigationInfo(fullPath: string): NavigationInfo {
  // Remove base URL parts (http://localhost:3000/)
  const urlParts = fullPath.split('/');
  const startIndex = urlParts.findIndex(part => part === '3000') + 1;
  const relevantPath = urlParts.slice(startIndex).filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = [];
  let currentSlug = '';

  // Build breadcrumbs using the sidebar structure
  for (let i = 0; i < relevantPath.length - 1; i++) {
    const segment = relevantPath[i];
    currentSlug = currentSlug ? `${currentSlug}/${segment}` : segment;

    const item = findItemInStructure(sidebarStructure, segment);
    const title = item ? item.title : segment.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    breadcrumbs.push({
      title,
      slug: currentSlug
    });
  }

  // Get the current page title from the sidebar structure
  const lastSegment = relevantPath[relevantPath.length - 1];
  const currentPageItem = findItemInStructure(sidebarStructure, lastSegment);
  const currentPageTitle = currentPageItem ? currentPageItem.title : (
    lastSegment ? lastSegment.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ') : 'Home'
  );

  return {
    breadcrumbs,
    currentPageTitle
  };
}

interface HomePageProps {
  path: string;
}

export default async function HomePage({ path }: HomePageProps) {
  const { breadcrumbs, currentPageTitle } = getNavigationInfo(path);

  return (
    <div className="py-8 px-24">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="text-2xl font-bold mb-4">{currentPageTitle}</h1>
      <p>
        Waku (wah-ku) or わく means "framework" in Japanese. As the minimal React
        framework, it's designed to accelerate the work of developers at startups
        and agencies building small to medium-sized React projects. These include
        marketing websites, light ecommerce, and web applications. We recommend
        other frameworks for heavy ecommerce or enterprise applications. Waku is a
        lightweight alternative bringing a fun developer experience to the server
        components era. Yes, let's make React development fun again!
      </p>
      <Info message="text block" />
      <Link to="/about" className="mt-4 inline-block underline">
        About page
      </Link>
    </div>
  );
}
