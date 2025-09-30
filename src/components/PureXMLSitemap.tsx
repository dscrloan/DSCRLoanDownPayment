import { useEffect } from 'react';

export function PureXMLSitemap() {
  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0];
    
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
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
</urlset>`;

    // NUCLEAR APPROACH: Completely replace entire document with XML
    
    // Stop all React rendering and JavaScript execution
    const scripts = document.querySelectorAll('script');
    scripts.forEach(script => {
      if (script.src || script.innerHTML.includes('React')) {
        script.remove();
      }
    });
    
    // Remove all stylesheets
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"], style');
    stylesheets.forEach(sheet => sheet.remove());
    
    // Clear entire HTML
    document.documentElement.innerHTML = '';
    
    // Write pure XML
    document.open('application/xml');
    document.write(xmlContent);
    document.close();
    
    // Override document properties to ensure XML content type
    try {
      Object.defineProperty(document, 'contentType', {
        value: 'application/xml',
        writable: false,
        configurable: false
      });
    } catch (e) {
      // Ignore if property can't be overridden
    }
    
    // Prevent any further React rendering
    if (window.React) {
      delete window.React;
    }
    
  }, []);

  // Return null to prevent any React rendering
  return null;
}