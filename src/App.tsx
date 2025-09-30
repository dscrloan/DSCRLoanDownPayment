import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Separator } from "./components/ui/separator";
import { SitemapPage } from "./components/SitemapPage";
import { PureSitemapXML } from "./components/PureSitemapXML";
import { useState, useEffect } from "react";

export default function App() {
  const [showSitemap, setShowSitemap] = useState(false);
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

  // Generate and download XML sitemap
  const downloadSitemap = () => {
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
    <priority>0.8</priority>
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
    <loc>https://dscrloandownpayment.com#faqs</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

    const blob = new Blob([sitemapContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sitemap.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Handle XML sitemap route - PURE XML for Google Search Console
  if (currentPath === '/sitemap.xml' || window.location.pathname === '/sitemap.xml') {
    return <PureSitemapXML />;
  }

  // Show sitemap page if requested
  if (showSitemap) {
    return <SitemapPage />;
  }

  return (
    <>
      {/* SEO Meta Tags - These would be handled by your meta framework */}
      <head>
        <title>DSCR Loan Down Payment (Typical 20–25%): Factors & Examples</title>
        <meta name="description" content="Understand DSCR loan down payment ranges, factors that change them, and simple examples. See your options and next steps." />
        <link rel="canonical" href="https://dscrloandownpayment.com" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Structured Data - FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is 20% down enough for a DSCR loan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, 20% down (80% LTV) is often sufficient for DSCR loans with strong credit and cash flow. However, 25% down (75% LTV) typically offers better rates and terms."
                }
              },
              {
                "@type": "Question", 
                "name": "Can first-time investors qualify?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, but first-time investors may face slightly higher down payment requirements (25%+) and stricter reserve requirements. Experience with rental properties helps but isn't always required."
                }
              },
              {
                "@type": "Question",
                "name": "How do reserves affect my down payment?", 
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Higher cash reserves (6+ months vs 2-3 months) can help qualify for lower down payment programs and better interest rates. Reserves demonstrate financial stability to lenders."
                }
              }
            ]
          })}
        </script>

        {/* Structured Data - HowTo */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Calculate DSCR Loan Down Payment Requirements",
            "description": "Step-by-step guide to understanding DSCR loan down payment calculations",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Determine Property Value",
                "text": "Get an accurate property valuation through appraisal or market analysis"
              },
              {
                "@type": "HowToStep", 
                "name": "Calculate Target LTV",
                "text": "Most DSCR loans offer 75-80% LTV, meaning 20-25% down payment required"
              },
              {
                "@type": "HowToStep",
                "name": "Assess DSCR Ratio",
                "text": "Calculate debt service coverage ratio using property rent vs mortgage payment"
              },
              {
                "@type": "HowToStep",
                "name": "Review Credit and Reserves",
                "text": "Higher credit scores and cash reserves can improve terms and reduce down payment requirements"
              }
            ]
          })}
        </script>

        {/* Structured Data - Website */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "DSCR Loan Down Payment Guide",
            "description": "Educational resource helping real estate investors understand DSCR loan down payment requirements and financing options",
            "url": "https://dscrloandownpayment.com",
            "hasPart": [
              {
                "@type": "WebPage",
                "name": "Site Map",
                "description": "Complete navigation structure for DSCR loan down payment educational resource",
                "url": "https://dscrloandownpayment.com/sitemap"
              }
            ]
          })}
        </script>
      </head>
      
      <div className="min-h-screen bg-background">
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-7xl">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <span className="font-medium">DSCR Down Payment</span>
            </div>

            {/* Breadcrumb and CTA */}
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
                <a href="https://www.shopdscrloans.com" className="hover:text-foreground">Home</a>
                <span aria-hidden="true">{'>'}</span>
                <span className="text-foreground">Down Payment</span>
              </nav>
              <Button asChild>
                <a href="https://www.shopdscrloans.com" className="inline-flex items-center" rel="noopener" aria-label="View DSCR loan options">
                  See My DSCR Options →
                </a>
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto max-w-4xl px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-12" role="banner">
            <h1 className="mb-4">DSCR Loan Down Payment: How Much Do You Need?</h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              DSCR loan down payments typically range from 20–25%, but your exact requirements vary based on 
              loan-to-value ratios, FICO scores, cash reserves, investor experience, and property type. 
              Get precise terms through a qualified broker for your specific situation.
            </p>
            <Button size="lg" asChild>
              <a href="https://www.shopdscrloans.com" className="inline-flex items-center" rel="noopener" aria-label="Get personalized DSCR loan options">
                See My DSCR Options →
              </a>
            </Button>
          </section>

          {/* Quick Answer Section */}
          <section id="quick-answer" className="mb-12" aria-labelledby="quick-answer-heading">
            <h2 id="quick-answer-heading" className="mb-6">Typical DSCR Down Payment Ranges</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>20–25% down is common for many DSCR loan scenarios with standard terms.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>Lower LTV requirements combined with stronger DSCR ratios and more cash reserves can improve terms.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>Property type (single-family vs 2–4 units vs condos/short-term rentals) and investor experience significantly matter.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Factors Section */}
          <section id="factors" className="mb-12" aria-labelledby="factors-heading">
            <h2 id="factors-heading" className="mb-6">5 Factors That Influence DSCR Down Payment</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">DSCR Ratio</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Higher debt service coverage ratios (1.25+ vs 1.0) can qualify for better terms and potentially lower down payment requirements.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">LTV Target</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Loan-to-value ratios typically range from 75-80%, with lower LTV requirements meaning higher down payments but better rates.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">FICO Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Credit scores above 720 generally receive the best terms, while scores below 680 may require larger down payments.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cash Reserves</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Lenders typically require 2-6 months of mortgage payments in reserves, with more reserves improving overall terms.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Experience Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Seasoned investors with rental property experience often qualify for better terms than first-time investors.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm">
                <strong>Special Considerations:</strong> Condos and warrantability issues, short-term rental properties, 
                and multi-unit buildings (2-4 units) can change down payment requirements significantly.
              </p>
            </div>
          </section>

          {/* Example Estimator Section */}
          <section id="estimator" className="mb-12" aria-labelledby="estimator-heading">
            <h2 id="estimator-heading" className="mb-6">3-Input Example: Price, Target LTV, Rent</h2>
            <p className="mb-6">
              Let's walk through a simple example to understand how different LTV scenarios affect your down payment:
            </p>
            
            <div className="bg-muted p-6 rounded-lg mb-6">
              <div className="grid gap-4 md:grid-cols-3 mb-4">
                <div>
                  <strong>Purchase Price:</strong> $400,000
                </div>
                <div>
                  <strong>Monthly Rent:</strong> $3,200
                </div>
                <div>
                  <strong>DSCR:</strong> 1.25 (estimated)
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">LTV Scenario</th>
                      <th className="text-left p-2">Loan Amount</th>
                      <th className="text-left p-2">Down Payment</th>
                      <th className="text-left p-2">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">75% LTV</td>
                      <td className="p-2">$300,000</td>
                      <td className="p-2">$100,000</td>
                      <td className="p-2">25%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">80% LTV</td>
                      <td className="p-2">$320,000</td>
                      <td className="p-2">$80,000</td>
                      <td className="p-2">20%</td>
                    </tr>
                    <tr>
                      <td className="p-2">85% LTV</td>
                      <td className="p-2">$340,000</td>
                      <td className="p-2">$60,000</td>
                      <td className="p-2">15%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Disclaimer:</strong> Actual terms vary based on complete financial profile, property details, 
                and lender guidelines. This is for illustration purposes only.
              </p>
            </div>
            
            <div className="text-center">
              <Button asChild variant="outline">
                <a href="https://www.shopdscrloans.com" className="inline-flex items-center" rel="noopener" aria-label="Get precise DSCR loan options">
                  Get precise options at shopdscrloans.com →
                </a>
              </Button>
            </div>
          </section>

          {/* State Snapshots Section */}
          <section id="states" className="mb-12" aria-labelledby="states-heading">
            <h2 id="states-heading" className="mb-6">State-Specific Notes</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  state: "Florida",
                  slug: "florida",
                  points: [
                    "High demand in Tampa, Orlando, and Miami markets",
                    "Strong short-term rental opportunities in coastal areas",
                    "Condo warrantability can be challenging in some areas"
                  ]
                },
                {
                  state: "Texas",
                  slug: "texas",
                  points: [
                    "Austin, Dallas, and Houston offer strong rental markets",
                    "No state income tax benefits real estate investors",
                    "Generally investor-friendly landlord laws"
                  ]
                },
                {
                  state: "Arizona",
                  slug: "arizona",
                  points: [
                    "Phoenix and Scottsdale see consistent appreciation",
                    "Strong population growth drives rental demand",
                    "Desert climate requires specific property considerations"
                  ]
                },
                {
                  state: "Tennessee",
                  slug: "tennessee",
                  points: [
                    "Nashville and Memphis offer affordable entry points",
                    "No state income tax advantages for investors",
                    "Growing job markets support rental demand"
                  ]
                },
                {
                  state: "Michigan",
                  slug: "michigan",
                  points: [
                    "Detroit revival creates opportunities",
                    "Grand Rapids and Ann Arbor have stable markets",
                    "Lower property prices allow for higher cash flow"
                  ]
                },
                {
                  state: "Indiana",
                  slug: "indiana",
                  points: [
                    "Indianapolis offers affordable investment properties",
                    "Strong Midwest rental market fundamentals",
                    "Lower competition compared to coastal markets"
                  ]
                },
                {
                  state: "Ohio",
                  slug: "ohio",
                  points: [
                    "Columbus, Cincinnati, and Cleveland have opportunities",
                    "Affordable property prices and decent rental yields",
                    "Stable job markets in healthcare and education"
                  ]
                },
                {
                  state: "Georgia",
                  slug: "georgia",
                  points: [
                    "Atlanta metro area has strong growth potential",
                    "Business-friendly environment attracts companies",
                    "Diverse economy supports rental demand"
                  ]
                }
              ].map((stateInfo) => (
                <Card key={stateInfo.state}>
                  <CardHeader>
                    <CardTitle className="text-lg">{stateInfo.state}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {stateInfo.points.map((point, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" size="sm">
                      <a href={`https://www.shopdscrloans.com/states/${stateInfo.slug}`} rel="noopener" aria-label={`Learn more about DSCR loans in ${stateInfo.state}`}>
                        Learn More
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Property Types Section */}
          <section id="property-types" className="mb-12" aria-labelledby="property-types-heading">
            <h2 id="property-types-heading" className="mb-6">SFR vs 2–4 Units vs Condos vs STR</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Single-Family Rentals (SFR)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Typically the easiest to finance with standard 20-25% down payments. Most lenders are comfortable with SFR properties and offer competitive terms.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">2-4 Unit Properties</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>May require slightly higher down payments (25%+) due to increased complexity and risk. Some lenders specialize in small multifamily properties.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Condominiums</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Warrantability and HOA financial health can impact terms. Some condos may require higher down payments or face limited lender options.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Short-Term Rentals (STR)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Often require 25-30% down due to higher perceived risk and income volatility. Fewer lenders offer STR-specific DSCR programs.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How to Lower Down Payment Section */}
          <section className="mb-12">
            <h2 className="mb-6">5 Ways Investors Reduce Down Payment</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span><strong>Improve DSCR:</strong> Increase rent or reduce expenses to boost your debt service coverage ratio above 1.25.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span><strong>Accept Lower LTV:</strong> Some programs offer better terms at 75% LTV vs 80%, requiring more down but better rates.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span><strong>Add Cash Reserves:</strong> Show 6+ months of payments in reserves to qualify for more favorable terms.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span><strong>Consider Buydowns/Points:</strong> Pay points upfront to reduce rate and potentially improve loan terms.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span><strong>Show Experience:</strong> Document your rental property management experience and successful investment history.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <div className="text-center mt-6">
              <Button asChild>
                <a href="https://www.shopdscrloans.com" className="inline-flex items-center" rel="noopener" aria-label="Compare DSCR loan options">
                  Compare realistic options → shopdscrloans.com
                </a>
              </Button>
            </div>
          </section>

          {/* Documents & Timeline Section */}
          <section className="mb-12">
            <h2 className="mb-6">What Lenders Review</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Required Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                      <span>Rent evidence or market rent analysis</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                      <span>Bank statements showing cash reserves</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                      <span>Credit profile and score verification</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                      <span>Property details and condition assessment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                      <span>Professional appraisal of property value</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Typical Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                      <span>Pre-screening and initial qualification (1-2 days)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                      <span>Document submission and review (3-5 days)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                      <span>Property appraisal scheduling and completion (1-2 weeks)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                      <span>Underwriting and final approval (1-2 weeks)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                      <span>Closing and funding (3-5 days)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faqs" className="mb-12" aria-labelledby="faqs-heading">
            <h2 id="faqs-heading" className="mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is 20% down enough for a DSCR loan?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Yes, 20% down (80% LTV) is often sufficient for DSCR loans with strong credit and cash flow. However, 25% down (75% LTV) typically offers better rates and terms.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can first-time investors qualify?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Yes, but first-time investors may face slightly higher down payment requirements (25%+) and stricter reserve requirements. Experience with rental properties helps but isn't always required.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do reserves affect my down payment?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Higher cash reserves (6+ months vs 2-3 months) can help qualify for lower down payment programs and better interest rates. Reserves demonstrate financial stability to lenders.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do STR properties require more down?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Typically yes. Short-term rental properties often require 25-30% down due to income volatility and limited lender appetite. Fewer DSCR programs accept STR properties.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What if my DSCR is just below 1.0?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Some lenders offer programs for DSCR ratios as low as 0.75, but expect higher down payments (30%+) and interest rates. Consider increasing rent or finding properties with better cash flow.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Resources Section */}
          <section className="mb-12">
            <h2 className="mb-6">Resources</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2">
                    <a href="https://dscrloanapproval.com" className="text-primary hover:underline" rel="noopener" aria-label="Visit DSCR Loan Approval resource">
                      DSCR Loan Approval
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground">Complete guide to DSCR loan approval requirements and process optimization strategies.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2">
                    <a href="https://dscrloanrequirements.com" className="text-primary hover:underline" rel="noopener" aria-label="Visit DSCR Loan Requirements resource">
                      DSCR Loan Requirements
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground">Detailed breakdown of all DSCR loan qualification requirements and documentation needed.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2">
                    <a href="https://dscrqualifier.com" className="text-primary hover:underline" rel="noopener" aria-label="Visit DSCR Qualifier resource">
                      DSCR Qualifier
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground">Tools and calculators to help determine your DSCR loan qualification status.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2">
                    <a href="https://dscrqualify.com" className="text-primary hover:underline" rel="noopener" aria-label="Visit DSCR Qualify resource">
                      DSCR Qualify
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground">Quick qualification assessment and pre-screening tools for DSCR loans.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2">
                    <a href="https://dscrrater.com" className="text-primary hover:underline" rel="noopener" aria-label="Visit DSCR Rater resource">
                      DSCR Rater
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground">Compare DSCR loan rates and terms from multiple lenders and programs.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2">
                    <a href="https://dscrshop.info" className="text-primary hover:underline" rel="noopener" aria-label="Visit DSCR Shop resource">
                      DSCR Shop Info
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground">Comprehensive shopping guide for finding the best DSCR loan programs.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2">
                    <a href="https://dscrunderwriting.com" className="text-primary hover:underline" rel="noopener" aria-label="Visit DSCR Underwriting resource">
                      DSCR Underwriting
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground">Detailed information about DSCR loan underwriting guidelines and requirements.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2">
                    <a href="https://dscruw.com" className="text-primary hover:underline" rel="noopener" aria-label="Visit DSCR UW resource">
                      DSCR UW
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground">Professional underwriting services and consultation for DSCR loan applications.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-6">
              <Button asChild variant="outline">
                <a href="https://www.shopdscrloans.com" rel="noopener" aria-label="Browse all DSCR loan topics">
                  All DSCR topics → shopdscrloans.com
                </a>
              </Button>
              <Button variant="outline" onClick={() => setShowSitemap(true)} aria-label="View site map page">
                View Site Map
              </Button>
              <Button asChild variant="outline">
                <a href="/sitemap.xml" target="_blank" rel="noopener" aria-label="View XML sitemap for search engines">
                  XML Sitemap
                </a>
              </Button>
              <Button variant="outline" onClick={downloadSitemap} aria-label="Download XML sitemap for SEO">
                Download Sitemap.xml
              </Button>
            </div>
          </section>

          {/* Bottom CTA Band */}
          <section className="text-center py-8 mb-8 bg-primary text-primary-foreground rounded-lg">
            <h2 className="mb-4 text-white">See Your DSCR Options</h2>
            <p className="mb-6 text-primary-foreground/90 max-w-2xl mx-auto">
              Get personalized DSCR loan options with accurate down payment requirements based on your specific situation and property details.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="https://www.shopdscrloans.com" className="inline-flex items-center" rel="noopener" aria-label="Get personalized DSCR loan options">
                See My DSCR Options →
              </a>
            </Button>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t bg-muted/50">
          <div className="container mx-auto max-w-4xl px-4 py-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h4 className="mb-4">DSCR Down Payment Guide</h4>
                <p className="text-sm text-muted-foreground">
                  Educational resource helping real estate investors understand DSCR loan down payment requirements and financing options. This information is for educational purposes only.
                </p>
              </div>
              
              <div>
                <h4 className="mb-4">Quick Links</h4>
                <nav className="space-y-2" aria-label="Footer navigation">
                  <a href="#factors" className="block text-sm text-muted-foreground hover:text-foreground">Down Payment Factors</a>
                  <a href="#estimator" className="block text-sm text-muted-foreground hover:text-foreground">Payment Estimator</a>
                  <a href="#states" className="block text-sm text-muted-foreground hover:text-foreground">State Information</a>
                  <a href="#faqs" className="block text-sm text-muted-foreground hover:text-foreground">FAQs</a>
                  <button 
                    onClick={() => setShowSitemap(true)}
                    className="block text-sm text-muted-foreground hover:text-foreground text-left"
                    aria-label="View site map page"
                  >
                    Site Map
                  </button>
                  <a 
                    href="/sitemap.xml" 
                    target="_blank"
                    rel="noopener"
                    className="block text-sm text-muted-foreground hover:text-foreground"
                    aria-label="View XML sitemap for search engines"
                  >
                    XML Sitemap
                  </a>
                  <button 
                    onClick={downloadSitemap}
                    className="block text-sm text-muted-foreground hover:text-foreground text-left"
                    aria-label="Download XML sitemap"
                  >
                    Download Sitemap
                  </button>
                </nav>
              </div>
              
              <div>
                <h4 className="mb-4">Related Resources</h4>
                <nav className="space-y-2" aria-label="Related DSCR resources">
                  <a href="https://dscrloanapproval.com" className="block text-sm text-muted-foreground hover:text-foreground" rel="noopener">DSCR Loan Approval</a>
                  <a href="https://dscrloanrequirements.com" className="block text-sm text-muted-foreground hover:text-foreground" rel="noopener">DSCR Requirements</a>
                  <a href="https://dscrqualifier.com" className="block text-sm text-muted-foreground hover:text-foreground" rel="noopener">DSCR Qualifier</a>
                  <a href="https://www.shopdscrloans.com" className="block text-sm text-muted-foreground hover:text-foreground" rel="noopener">Shop DSCR Loans</a>
                </nav>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
              <p>&copy; 2025 DSCR Down Payment Guide. All rights reserved.</p>
              <p className="mt-2 md:mt-0">This information is for educational purposes only.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}