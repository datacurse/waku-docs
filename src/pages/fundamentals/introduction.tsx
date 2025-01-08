import { Link } from 'waku';
import { sidebarStructure } from '../../sidebarStructure';
import { Info } from '../../components/info';

// Helper function to find an item in the sidebar structure
function findSidebarItem(path: string): { title: string; type: string } | null {
  const segments = path.split('/').filter(Boolean);

  function searchInItems(items: any[]): any | null {
    for (const item of items) {
      // Check if this is the target item
      if (item.slug === segments[segments.length - 1]) {
        return item;
      }

      // If item has children, search them
      if (item.children) {
        const found = searchInItems(item.children);
        if (found) return found;
      }
    }
    return null;
  }

  return searchInItems(sidebarStructure.collections);
}

export default async function HomePage({ path }: { path: string }) {
  const sidebarItem = findSidebarItem(path);

  const pageTitle = sidebarItem?.title;

  return (
    // TODO: move padding to parent component
    <div className='py-8 px-24'>
      <title>{pageTitle}</title>
      <h1 className="text-4xl font-bold tracking-tight">{pageTitle}</h1>
      <p>Waku (wah-ku) or わく means “framework” in Japanese. As the minimal React framework, it’s designed to accelerate the work of developers at startups and agencies building small to medium-sized React projects. These include marketing websites, light ecommerce, and web applications.

        We recommend other frameworks for heavy ecommerce or enterprise applications. Waku is a lightweight alternative bringing a fun developer experience to the server components era. Yes, let’s make React development fun again!</p>
      <Info message={'text block'} />
      <Link to="/about" className="mt-4 inline-block underline">
        About page
      </Link>
    </div>
  );
}
