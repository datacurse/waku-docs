'use client';
import { sidebarStructure } from "@/sidebarStructure";
import { getUrlSlugs, findTopLevelBySlug } from "@/utils";
import { Link, useRouter_UNSTABLE as useRouter } from 'waku';
import { FaChevronRight } from "react-icons/fa6";

export default function Breadcrumbs() {
  const router = useRouter();
  const slugs = getUrlSlugs(router.path);

  // Build paths for each level
  const pathElements = slugs.map((slug, index) => {
    // Get the top-level item if this is first slug
    const item = index === 0
      ? findTopLevelBySlug(sidebarStructure, slug)
      : undefined;
    // Build the path up to this point for the link
    const path = `/${slugs.slice(0, index + 1).join('/')}` as const;
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
            <span>{element.title}</span>
            {element.Icon && (
              <span className="text-xs">
                <element.Icon />
              </span>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
}
