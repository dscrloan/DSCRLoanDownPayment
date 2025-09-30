import { useEffect, useState } from 'react';

interface RouterProps {
  children: React.ReactNode;
}

export function Router({ children }: RouterProps) {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // Get current path on mount
    setCurrentPath(window.location.pathname);

    // Listen for navigation changes
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle sitemap.xml route
  if (currentPath === '/sitemap.xml') {
    return <SitemapXML />;
  }

  // Default to main app
  return <>{children}</>;
}

function SitemapXML() {
  useEffect(() => {
    // Set XML content type
    document.title = 'Sitemap';
    
    // Generate XML sitemap content
    const currentDate = new Date().toISOString().split('T')[0];
    
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

    // Replace page content with XML
    document.documentElement.innerHTML = `
      <head>
        <meta charset="UTF-8">
        <meta name="robots" content="noindex">
        <title>XML Sitemap</title>
      </head>
      <body style="font-family: monospace; white-space: pre; margin: 0; padding: 20px; background: #f5f5f5;">
${sitemapContent}
      </body>
    `;
  }, []);

  return (
    <div style={{ 
      fontFamily: 'monospace', 
      whiteSpace: 'pre-wrap', 
      margin: 0, 
      padding: '20px', 
      background: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <div style={{ 
        background: 'white', 
        padding: '20px', 
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ margin: '0 0 20px 0', color: '#333' }}>XML Sitemap</h1>
        <p style={{ margin: '0 0 20px 0', color: '#666' }}>
          This XML sitemap is designed for search engines like Google, Bing, and others.
        </p>
        <a 
          href="/" 
          style={{ 
            color: '#0066cc', 
            textDecoration: 'none',
            padding: '8px 16px',
            background: '#f0f0f0',
            borderRadius: '4px',
            display: 'inline-block'
          }}
        >
          ← Back to DSCR Guide
        </a>
        <div style={{ 
          marginTop: '20px', 
          padding: '20px', 
          background: '#f9f9f9', 
          borderRadius: '4px',
          border: '1px solid #ddd',
          fontSize: '14px'
        }}>
          <strong>For Google Search Console:</strong><br/>
          Submit this URL: <code>https://dscrloandownpayment.com/sitemap.xml</code>
        </div>
      </div>
    </div>
  );
}