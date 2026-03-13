/**
 * FAQSchema — outputs a FAQPage JSON-LD script tag.
 *
 * Google's FAQ rich results display expandable Q&A pairs directly in the SERP,
 * improving CTR without any additional ranking required.
 * Eligibility: https://developers.google.com/search/docs/appearance/structured-data/faqpage
 *
 * Usage:
 *   import { FAQSchema } from "@/components/schema/FAQSchema";
 *   <FAQSchema faqs={service.faq} />
 *
 * The `faqs` prop matches the existing FAQ shape in src/data/services.ts.
 */

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQ[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
