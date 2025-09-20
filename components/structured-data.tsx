export function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vivekbhos.dev'
  
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vivek Bhos",
    "url": baseUrl,
    "image": `${baseUrl}/hero.png`,
    "jobTitle": "Full-Stack Web Developer",
    "description": "Full-Stack Web Developer and Co-Founder of Navibyte Innovations. MCA student at Modern College of Engineering, Pune. Industry Expert on Board of Studies.",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Modern College of Engineering",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Navibyte Innovations Pvt. Ltd.",
        "url": "https://www.navibyte.in",
        "description": "Leading technical strategy and product development for innovative web solutions"
      },
      {
        "@type": "Organization",
        "name": "Modern College of Arts, Science & Commerce",
        "url": "https://www.moderncollegepune.edu.in",
        "description": "Industry Expert on Board of Studies"
      }
    ],
    "founder": [
      {
        "@type": "Organization",
        "name": "Navibyte Innovations Pvt. Ltd.",
        "url": "https://www.navibyte.in"
      },
      {
        "@type": "Organization",
        "name": "My Abhyasika",
        "url": "https://www.abhyasika.online"
      }
    ],
    "knowsAbout": [
      "Full-Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Web Development",
      "Software Engineering",
      "Tech Leadership",
      "Entrepreneurship"
    ],
    "sameAs": [
      "https://github.com/bhos1242",
      "https://linkedin.com/in/vivekbhos",
      "https://twitter.com/bhos1242"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "professional",
      "email": "vivekbhos1804@gmail.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vivek Bhos Portfolio",
    "url": baseUrl,
    "description": "Portfolio of Vivek Bhos, Full-Stack Web Developer and Co-Founder",
    "author": {
      "@type": "Person",
      "name": "Vivek Bhos"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Vivek Bhos - Full-Stack Development Services",
    "image": `${baseUrl}/hero.png`,
    "description": "Professional full-stack web development services, technical consultation, and software engineering solutions.",
    "provider": {
      "@type": "Person",
      "name": "Vivek Bhos"
    },
    "serviceType": "Software Development",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full-Stack Web Development",
            "description": "Complete web application development using modern technologies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical Consultation",
            "description": "Expert advice on software architecture and technology stack selection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tech Talks & Speaking",
            "description": "Educational presentations and technical workshops"
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
    </>
  )
}
