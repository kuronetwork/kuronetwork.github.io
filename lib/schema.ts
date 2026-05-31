/**
 * Schema.org JSON-LD definitions
 *
 * Centralized so every page references the same canonical Person entity
 * via @id (https://kuronetwork.me/#person). Keeping the IDs consistent is
 * critical for AI crawlers (ChatGPT, Claude, Perplexity, Google AI Overview)
 * to attribute citations to the correct author entity.
 */

export const SITE_URL = 'https://kuronetwork.me'

export const PERSON_ID = `${SITE_URL}/#person`
export const WEBSITE_ID = `${SITE_URL}/#website`

/**
 * Person schema — same Kuro across the whole site.
 * sameAs links every public profile so AI/search engines can establish
 * a single identity entity.
 */
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Kuro Huang',
  alternateName: 'Kuro',
  url: SITE_URL,
  image: `${SITE_URL}/images/avatar.jpg`,
  jobTitle: 'Cybersecurity Consultant',
  description:
    '資安顧問，持有 CISSP、CCSP 等 40+ 張國際認證，AWS Community Builder（Security 組）。',
  knowsAbout: [
    'Cybersecurity',
    'Cloud Security',
    'AWS Security',
    'Information Security Governance',
    'Risk Management',
    'Security Auditing',
    'Penetration Testing',
    'CISSP',
    'CCSP',
    'ISACA',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'CISSP',
      recognizedBy: { '@type': 'Organization', name: 'ISC2' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'CCSP',
      recognizedBy: { '@type': 'Organization', name: 'ISC2' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'CISA',
      recognizedBy: { '@type': 'Organization', name: 'ISACA' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'CISM',
      recognizedBy: { '@type': 'Organization', name: 'ISACA' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'CGEIT',
      recognizedBy: { '@type': 'Organization', name: 'ISACA' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'CEH Master',
      recognizedBy: { '@type': 'Organization', name: 'EC-Council' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'AWS Certified Solutions Architect - Associate',
      recognizedBy: { '@type': 'Organization', name: 'Amazon Web Services' },
    },
  ],
  sameAs: [
    'https://medium.com/@kuroH',
    'https://medium.com/blacksecurity',
    'https://twitter.com/catkuroH',
    'https://www.linkedin.com/in/kurohuang/',
    'https://builder.aws.com/community/@kurohuangaws',
    'https://dev.to/kurohuang',
    'https://www.facebook.com/kublackstock/',
    'https://www.threads.com/@kuronetwork',
    'https://www.instagram.com/kuronetwork/',
    'https://portaly.cc/kurohuang',
  ],
}

/**
 * WebSite schema — references the Person entity as publisher.
 */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: 'Kuro Network',
  description: '資安工作者 Kuro 的個人網站，分享資安、雲端安全、證照與技術文章。',
  inLanguage: 'zh-TW',
  publisher: { '@id': PERSON_ID },
}

/**
 * ProfilePage schema — only used on /about.
 * mainEntity points to the same Person entity defined above.
 */
export const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: `${SITE_URL}/about/`,
  name: '關於 Kuro',
  description: 'Kuro Huang 的職涯、證照、演講與社群志工經歷。',
  mainEntity: { '@id': PERSON_ID },
  isPartOf: { '@id': WEBSITE_ID },
}
