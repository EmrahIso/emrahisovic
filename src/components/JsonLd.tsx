export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Emrah Isović',
    url: 'https://emrahisovic.vercel.app',
    sameAs: [
      'https://github.com/EmrahIso',
      'https://www.linkedin.com/in/emrah-isovic-380127353/',
    ],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
