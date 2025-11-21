/**
 * Utility function to generate BreadcrumbList structured data
 * This helps Google understand site structure and generate sitelinks
 */
export function generateBreadcrumbs(items: { name: string; url: string }[]) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.milanmatkonsult.com';
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.url}`
    }))
  };
}

