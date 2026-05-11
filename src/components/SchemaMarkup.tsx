import Script from 'next/script';

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Viprat Joshi",
    "image": "https://vipratjoshi.com/portrait.jpeg",
    "description": "Dr. Viprat Joshi is a premier dental surgeon in the Greater Vancouver area, specializing in complex restorative procedures, All-on-X full arch rehabilitations, and advanced implantology.",
    "medicalSpecialty": "Dentistry",
    "occupationalCategory": "Dental Surgeon",
    "knowsAbout": ["All-on-4 Dental Implants", "Maxillofacial Surgery", "Wisdom Teeth Extraction", "Sedation Dentistry"],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "BC",
      "addressCountry": "CA"
    },
    "subOrganization": [
      {
        "@type": "DentalClinic",
        "name": "Douglas Park Dental",
        "address": "20571 Douglas Cres, Langley, BC V3A 4B6",
        "telephone": "(778) 726-0125",
        "url": "https://douglasparkdental.ca/"
      },
      {
        "@type": "DentalClinic",
        "name": "Infinity Dental Care",
        "address": "233 West 1st St, North Vancouver, BC",
        "telephone": "(778) 488-0815",
        "url": "https://infinitydentalcare.ca/"
      },
      {
        "@type": "DentalClinic",
        "name": "AARK Dental",
        "address": "2929 Barnet Hwy #2310, Coquitlam, BC V3B 5R5",
        "telephone": "(604) 554-0244",
        "url": "https://aarkdentistcoquitlamcentre.com/"
      }
    ]
  };

  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
