export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI Team Premium BD",
    "url": "https://aiteampremiumbd.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+8801533262758",
      "contactType": "sales",
      "availableLanguage": ["Bengali", "English"]
    },
    "areaServed": "BD",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61586742067282"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
