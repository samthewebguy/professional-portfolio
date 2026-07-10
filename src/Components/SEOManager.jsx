import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.samthewebguy.com";

const PERSON_SAME_AS = [
  "https://www.linkedin.com/in/samthewebguy",
  "https://www.x.com/ReachSAMonX",
  "https://github.com/samthewebguy",
];

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Samthewebguy",
      alternateName: "SAMTHEWEBGUY",
      url: `${SITE_URL}/`,
      creator: {
        "@id": `${SITE_URL}/#samuel-obazee`,
      },
      hasPart: [
        {
          "@type": "WebPage",
          name: "Work",
          url: `${SITE_URL}/work`,
        },
        {
          "@type": "WebPage",
          name: "Services",
          url: `${SITE_URL}/services`,
        },
        {
          "@type": "WebPage",
          name: "About",
          url: `${SITE_URL}/about`,
        },
        {
          "@type": "WebPage",
          name: "Stack",
          url: `${SITE_URL}/stack`,
        },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#samuel-obazee`,
      name: "Samuel Obazee",
      alternateName: "SAMTHEWEBGUY",
      url: `${SITE_URL}/about`,
      sameAs: PERSON_SAME_AS,
    },
  ],
};

const seoPages = {
  "/": {
    title:
      "Samuel Obazee — High-Performance Web Developer & Systems Builder",
    description:
      "Helping SMBs, startups, coaches, ecommerce brands, and global organizations build functional websites and connected systems that sell, scale, and save time. 4+ years of building across Squarespace, Shopify, and custom frameworks.",
    pageName: "Samuel Obazee — Web Developer & Systems Builder",
    schemaType: "WebPage",
  },

  "/work": {
    title: "Website Design & Development Portfolio — Samuel Obazee",
    description:
      "Explore selected website design and development projects by Samuel Obazee, including Shopify stores, landing pages, ecommerce websites, and custom React builds.",
    pageName: "Website Design & Development Portfolio",
    schemaType: "CollectionPage",
  },

  "/services": {
    title: "Website Design, Development & SEO Services — Samuel Obazee",
    description:
      "Website design, landing pages, ecommerce development, automation, SEO, and ongoing technical support for businesses, startups, coaches, and global organizations.",
    pageName: "Website Design, Development & SEO Services",
    schemaType: "CollectionPage",
  },

  "/about": {
    title: "About Samuel Obazee — Samthewebguy",
    description:
      "Learn about Samuel Obazee, also known as Samthewebguy, a web developer and systems builder creating websites, ecommerce experiences, and connected business systems.",
    pageName: "About Samuel Obazee",
    schemaType: "ProfilePage",
  },

  "/stack": {
    title: "Web Development Tools & Tech Stack — Samuel Obazee",
    description:
      "Explore the platforms and tools Samuel Obazee uses to build websites, ecommerce stores, frontend applications, automations, payments, and business workflows.",
    pageName: "Web Development Tools & Tech Stack",
    schemaType: "CollectionPage",
  },
};

function setMeta(attribute, key, content) {
  let tag = document.head.querySelector(
    `meta[${attribute}="${key}"]`
  );

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonical(url) {
  let canonical = document.head.querySelector(
    'link[rel="canonical"]'
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

function setSchema(schema) {
  let script = document.head.querySelector("#page-schema");

  if (!script) {
    script = document.createElement("script");
    script.id = "page-schema";
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema);
}

function SEOManager() {
  const location = useLocation();

  useEffect(() => {
    const pathname =
      location.pathname !== "/" && location.pathname.endsWith("/")
        ? location.pathname.slice(0, -1)
        : location.pathname;

    const page = seoPages[pathname];

    if (!page) return;

    const canonicalUrl =
      pathname === "/" ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;

    document.title = page.title;

    setMeta("name", "description", page.description);

    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "Samthewebguy");
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta(
        "property",
        "og:image",
        `${SITE_URL}/portfolio-og-banner.png`
    );
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta(
        "property",
        "og:image:alt",
        "Samuel Obazee — Samthewebguy portfolio"
    );

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:url", canonicalUrl);
    setMeta("name", "twitter:title", page.title);
    setMeta("name", "twitter:description", page.description);
    setMeta(
        "name",
        "twitter:image",
        `${SITE_URL}/portfolio-og-banner.png`
    );
    setMeta(
        "name",
        "twitter:image:alt",
        "Samuel Obazee — Samthewebguy portfolio"
    );

    setCanonical(canonicalUrl);

    if (pathname === "/") {
  setSchema(homepageSchema);
} else if (pathname === "/about") {
  setSchema({
    "@context": "https://schema.org",
    "@type": page.schemaType,
    "@id": `${canonicalUrl}#webpage`,
    name: page.pageName,
    description: page.description,
    url: canonicalUrl,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    mainEntity: {
      "@type": "Person",
      "@id": `${SITE_URL}/#samuel-obazee`,
      name: "Samuel Obazee",
      alternateName: "SAMTHEWEBGUY",
      url: canonicalUrl,
      image: `${SITE_URL}/samuel-obazee-headshot.jpg`,
      jobTitle: "Web Developer & Systems Builder",
      sameAs: PERSON_SAME_AS,
      description:
        "Samuel Obazee, professionally known as Samthewebguy, is a web developer and systems builder who helps businesses, startups, coaches, creators, and organizations build high-performing websites, ecommerce stores, landing pages, membership platforms, and online business systems. He also connects websites with payments, CRM, email marketing, and workflow automation to reduce manual work and support business growth. His work includes website development, SEO, performance optimization, integrations, and ongoing technical support.",
    },
  });
} else {
  setSchema({
    "@context": "https://schema.org",
    "@type": page.schemaType,
    "@id": `${canonicalUrl}#webpage`,
    name: page.pageName,
    description: page.description,
    url: canonicalUrl,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#samuel-obazee`,
    },
  });
}
    
  }, [location.pathname]);

  return null;
}

export default SEOManager;