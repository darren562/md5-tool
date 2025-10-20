"use client";

import Script from "next/script";

export type FAQItem = { q: string; a: string };

export default function LongTailSEO({
  title,
  breadcrumbs,
  faqs,
  relatedLinks,
}: {
  title: string;
  breadcrumbs: { name: string; url: string }[];
  faqs: FAQItem[];
  relatedLinks?: { name: string; url: string }[];
}) {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      item: b.url,
    })),
  };
  const hasRelated = !!relatedLinks?.length;
  const gridClass = hasRelated
    ? "ltseo__grid"
    : "ltseo__grid ltseo__grid--single";
  return (
    <section className="ltseo">
      <h2 className="ltseo__title">{title}</h2>
      <div className={gridClass}>
        <div className="ltseo__col ltseo__col--faq">
          <h3 className="ltseo__subtitle">FAQs</h3>
          <dl className="ltseo__faq">
            {faqs.map((f, idx) => (
              <div key={idx} className="ltseo__qa">
                <dt className="ltseo__q">{f.q}</dt>
                <dd className="ltseo__a">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
        {!!relatedLinks?.length && (
          <div className="ltseo__col ltseo__col--related">
            <h3 className="ltseo__subtitle">Related tools</h3>
            <ul className="ltseo__list">
              {relatedLinks.map((r, idx) => (
                <li key={idx}>
                  <a href={r.url} className="ltseo__link">
                    {r.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Script
        id="ld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(faqLd)}
      </Script>
      <Script
        id="ld-breadcrumbs"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadLd)}
      </Script>
    </section>
  );
}
