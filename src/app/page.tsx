import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import About from "@/components/sections/About";
import Achievement from "@/components/sections/Achievement";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Stack from "@/components/sections/Stack";
import Work from "@/components/sections/Work";
import { links, site } from "@/content/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${links.email}`,
  address: { "@type": "PostalAddress", addressCountry: "UZ" },
  sameAs: [links.github],
  knowsLanguage: ["uz", "ru", "en"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <SiteHeader />
      <main id="main">
        <Hero />
        <Work />
        <About />
        <Stack />
        <Achievement />
        <Journey />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
