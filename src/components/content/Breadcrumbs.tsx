'use client';
import { sidebarStructure } from "@/sidebarStructure";
import { getUrlSlugs, findItemByPath } from "@/utils";
import { Link, useRouter_UNSTABLE as useRouter } from 'waku';
import { FaChevronRight } from "react-icons/fa6";

export default function Breadcrumbs() {
  const router = useRouter();
  const slugs = getUrlSlugs(router.path);

  // Build paths for each level
  const pathElements = slugs.slice(0, -1).map((slug, index) => {
    // Get the path up to this point
    const currentPath = slugs.slice(0, index + 1);
    // Find the sidebar item for this path
    const item = findItemByPath(sidebarStructure, currentPath);

    // Build the path for the link
    const path = `/${currentPath.join('/')}` as const;

    return {
      title: item?.title || slug,
      path,
      Icon: item?.icon
    };
  });

  return (
    <div className="flex items-center gap-2">
      {pathElements.map((element, index) => (
        <div key={element.path} className="flex items-center gap-2">
          {index > 0 && (
            <FaChevronRight
              className="text-gray-400 text-xs"
            />
          )}
          <Link
            to={element.path}
            className="no-underline hover:underline text-xs tracking-wide font-semibold uppercase text-text-accent hover:text-text-accent-muted transition-colors inline-flex items-center gap-1"
          >
            {element.Icon && (
              <element.Icon className="w-4 h-4" />
            )}
            <span>{element.title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
