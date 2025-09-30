import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

export function SitemapPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const sitemapSections = [
    {
      title: "Main Pages",
      priority: "High",
      items: [
        {
          name: "DSCR Loan Down Payment Guide",
          url: "#",
          description: "Complete guide to DSCR loan down payment requirements, ranges, and factors",
          lastModified: currentDate,
          changeFreq: "Weekly"
        }
      ]
    },
    {
      title: "Key Sections",
      priority: "High",
      items: [
        {
          name: "Quick Answer",
          url: "#quick-answer",
          description: "Typical DSCR down payment ranges and common scenarios",
          lastModified: currentDate,
          changeFreq: "Weekly"
        },
        {
          name: "Down Payment Factors",
          url: "#factors", 
          description: "5 key factors that influence DSCR loan down payment requirements",
          lastModified: currentDate,
          changeFreq: "Weekly"
        },
        {
          name: "Payment Estimator",
          url: "#estimator",
          description: "Example calculations and LTV scenarios with real numbers",
          lastModified: currentDate,
          changeFreq: "Weekly"
        },
        {
          name: "Frequently Asked Questions",
          url: "#faqs",
          description: "Common questions about DSCR loan down payments and requirements",
          lastModified: currentDate,
          changeFreq: "Weekly"
        }
      ]
    },
    {
      title: "State Information",
      priority: "Medium",
      items: [
        {
          name: "State-Specific Notes",
          url: "#states",
          description: "DSCR loan market insights for FL, TX, AZ, TN, MI, IN, OH, GA",
          lastModified: currentDate,
          changeFreq: "Monthly"
        }
      ]
    },
    {
      title: "Property Types",
      priority: "Medium", 
      items: [
        {
          name: "Property Type Requirements",
          url: "#property-types",
          description: "Down payment differences for SFR, 2-4 units, condos, and STR properties",
          lastModified: currentDate,
          changeFreq: "Monthly"
        }
      ]
    },
    {
      title: "External Resources",
      priority: "Low",
      items: [
        {
          name: "DSCR Loan Approval",
          url: "https://dscrloanapproval.com",
          description: "Complete guide to DSCR loan approval requirements and process optimization",
          external: true
        },
        {
          name: "DSCR Loan Requirements", 
          url: "https://dscrloanrequirements.com",
          description: "Detailed breakdown of all DSCR loan qualification requirements",
          external: true
        },
        {
          name: "DSCR Qualifier",
          url: "https://dscrqualifier.com", 
          description: "Tools and calculators to determine DSCR loan qualification status",
          external: true
        },
        {
          name: "DSCR Qualify",
          url: "https://dscrqualify.com",
          description: "Quick qualification assessment and pre-screening tools",
          external: true
        },
        {
          name: "DSCR Rater",
          url: "https://dscrrater.com",
          description: "Compare DSCR loan rates and terms from multiple lenders",
          external: true
        },
        {
          name: "DSCR Shop Info",
          url: "https://dscrshop.info",
          description: "Comprehensive shopping guide for finding best DSCR loan programs",
          external: true
        },
        {
          name: "DSCR Underwriting", 
          url: "https://dscrunderwriting.com",
          description: "Detailed information about DSCR loan underwriting guidelines",
          external: true
        },
        {
          name: "DSCR UW",
          url: "https://dscruw.com",
          description: "Professional underwriting services and consultation for DSCR loans",
          external: true
        },
        {
          name: "Shop DSCR Loans",
          url: "https://www.shopdscrloans.com",
          description: "Browse and compare DSCR loan options from multiple lenders",
          external: true
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      {/* Sitemap Header */}
      <section className="text-center mb-12">
        <h1 className="mb-4">Site Map - DSCR Loan Down Payment Guide</h1>
        <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
          Complete navigation structure for our DSCR loan down payment educational resource. 
          Find all sections, topics, and external resources organized by priority and content type.
        </p>
        <div className="flex justify-center gap-3">
          <Button onClick={() => window.history.back()} aria-label="Return to main guide">
            ← Back to Main Guide
          </Button>
          <Button asChild variant="outline">
            <a href="https://www.shopdscrloans.com" rel="noopener" aria-label="Browse DSCR loan options">
              Browse DSCR Options →
            </a>
          </Button>
        </div>
      </section>

      {/* Last Updated */}
      <div className="text-center mb-8 p-4 bg-muted rounded-lg">
        <p className="text-sm">
          <strong>Last Updated:</strong> {currentDate} | 
          <strong> Content Type:</strong> Educational Resource | 
          <strong> Focus:</strong> DSCR Loan Down Payments
        </p>
      </div>

      {/* Sitemap Sections */}
      {sitemapSections.map((section, sectionIndex) => (
        <section key={sectionIndex} className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="mb-0">{section.title}</h2>
            <span className={`px-2 py-1 text-xs rounded-full ${
              section.priority === 'High' ? 'bg-red-100 text-red-700' :
              section.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
              'bg-green-100 text-green-700'
            }`}>
              {section.priority} Priority
            </span>
          </div>
          
          <div className="grid gap-4">
            {section.items.map((item, itemIndex) => (
              <Card key={itemIndex} className="transition-shadow hover:shadow-md">
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="mb-2">
                        <a 
                          href={item.url} 
                          className="text-primary hover:underline"
                          {...(item.external ? { rel: "noopener", target: "_blank" } : {})}
                          aria-label={`Navigate to ${item.name}`}
                        >
                          {item.name}
                          {item.external && " ↗"}
                        </a>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {item.description}
                      </p>
                      
                      {!item.external && (
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span><strong>Last Modified:</strong> {item.lastModified}</span>
                          <span><strong>Update Frequency:</strong> {item.changeFreq}</span>
                        </div>
                      )}
                      
                      {item.external && (
                        <div className="text-xs text-muted-foreground">
                          <span><strong>Type:</strong> External Resource</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="ml-4">
                      <Button asChild variant="outline" size="sm">
                        <a 
                          href={item.url}
                          {...(item.external ? { rel: "noopener", target: "_blank" } : {})}
                          aria-label={`Visit ${item.name}`}
                        >
                          {item.external ? "Visit" : "Go to"}
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}

      {/* SEO Schema Summary */}
      <section className="mb-12">
        <h2 className="mb-6">Structured Data & SEO Information</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3">Schema Types Implemented</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                    <span className="text-sm">FAQ Schema for question answers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                    <span className="text-sm">HowTo Schema for calculation steps</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                    <span className="text-sm">Website Schema for site information</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="mb-3">SEO Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                    <span className="text-sm">Semantic HTML structure with proper headings</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                    <span className="text-sm">Mobile-first responsive design</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                    <span className="text-sm">Fast loading with minimal JavaScript</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                    <span className="text-sm">XML sitemap generation for search engines</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Bottom CTA */}
      <section className="text-center py-8 bg-primary text-primary-foreground rounded-lg">
        <h2 className="mb-4 text-white">Ready to Explore DSCR Options?</h2>
        <p className="mb-6 text-primary-foreground/90 max-w-2xl mx-auto">
          Use this comprehensive guide to understand down payment requirements, then get personalized options.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <a href="https://www.shopdscrloans.com" rel="noopener" aria-label="Get personalized DSCR loan options">
            See My DSCR Options →
          </a>
        </Button>
      </section>
    </div>
  );
}