// PURE XML SITEMAP COMPONENT - No HTML wrapper, Google Search Console compatible
export function PureSitemapXML() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Execute immediately on component load
  (() => {
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://dscrloandownpayment.com</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://dscrloandownpayment.com#quick-answer</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://dscrloandownpayment.com#factors</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://dscrloandownpayment.com#estimator</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://dscrloandownpayment.com#faqs</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://dscrloandownpayment.com#states</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://dscrloandownpayment.com#property-types</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://dscrloandownpayment.com/sitemap</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;

    // NUCLEAR OPTION: Complete document replacement with pure XML
    
    // Stop React rendering immediately
    if (typeof window !== 'undefined' && window.stop) {
      window.stop();
    }
    
    // Clear everything and write pure XML
    document.open('application/xml', 'replace');
    document.write(sitemapContent);
    document.close();
    
    // Override MIME type
    Object.defineProperty(document, 'contentType', {
      value: 'application/xml',
      configurable: false,
      writable: false
    });
    
    // Set XML processing instruction
    if (document.doctype) {
      document.removeChild(document.doctype);
    }
    
    // Remove any React-generated elements
    const head = document.head;
    const body = document.body;
    const scripts = document.querySelectorAll('script');
    const styles = document.querySelectorAll('style, link[rel="stylesheet"]');
    
    if (head) head.remove();
    if (body) body.remove();
    scripts.forEach(script => script.remove());
    styles.forEach(style => style.remove());
    
    // Override window location detection
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, 'XML Sitemap', '/sitemap.xml');
    }
    
  })();
  
  // Return null to prevent React from rendering
  return null;
}