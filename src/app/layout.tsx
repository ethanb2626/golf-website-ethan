import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: {
    default: 'Get Into Golf with Ethan | Golf Lessons & Coaching in Miami',
    template: '%s | Get Into Golf with Ethan',
  },
  description:
    'Personalized golf lessons in Miami with Ethan Blandon. Focused on fundamentals, simple drills, and steady progress for golfers of all levels.',
  keywords: [
    'golf lessons Miami',
    'golf instructor Ethan Blandon',
    'learn golf Miami',
    'beginner golf coaching',
    'golf swing basics',
    'golf drills for beginners',
    'golf lessons for adults',
    'golf lessons for juniors',
    'private golf instruction',
    'golf coaching Miami',
    'golf improvement plan',
    'golf training program',
    'golf swing help',
    'get into golf',
    'Ethan golf coach',
    'Miami golf school',
    'golf fundamentals',
    'golf practice plan',
    'golf confidence coaching',
  ],
  authors: [{ name: 'Ethan Blandon', url: 'https://getintogolf.vercel.app' }],
  creator: 'Ethan Blandon',
  publisher: 'Get Into Golf with Ethan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://getintogolf.vercel.app',
    siteName: 'Get Into Golf with Ethan',
    title: 'Get Into Golf with Ethan | Golf Lessons & Coaching in Miami',
    description:
      'Beginner-friendly golf instruction with a focus on strong fundamentals and enjoyable practice.',
    images: [
      {
        url: 'https://getintogolf.vercel.app/images/ethan-golf.jpg',
        width: 1200,
        height: 630,
        alt: 'Ethan Blandon - Golf Instructor',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Into Golf with Ethan | Golf Lessons & Coaching in Miami',
    description:
      'Friendly, fundamentals-first golf coaching in Miami with Ethan Blandon.',
    images: ['https://getintogolf.vercel.app/images/ethan-golf.jpg'],
    creator: '@getintogolf',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://getintogolf.vercel.app',
  },
  category: 'Sports & Recreation',
  classification: 'Golf Instruction',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://getintogolf.vercel.app'),
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Get Into Golf with Ethan',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#059669',
    'theme-color': '#059669',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon and app icons */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='15' fill='%23059669'/><circle cx='16' cy='16' r='9' fill='white' stroke='%23d1fae5' stroke-width='1'/><circle cx='16' cy='16' r='2' fill='%23059669'/></svg>" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='15' fill='%23059669'/><circle cx='16' cy='16' r='9' fill='white' stroke='%23d1fae5' stroke-width='1'/><circle cx='16' cy='16' r='2' fill='%23059669'/></svg>" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='15' fill='%23059669'/><circle cx='16' cy='16' r='9' fill='white' stroke='%23d1fae5' stroke-width='1'/><circle cx='16' cy='16' r='2' fill='%23059669'/></svg>" />
        <link rel="manifest" href="/manifest.json" />

        {/* Additional meta tags for better mobile experience */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />

        {/* Apple-specific meta tags for better iMessage compatibility */}
        <meta property="og:image" content="https://ethan-m7pvli3qe-agk.vercel.app/images/ethan-pga.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:title" content="Ethan Blandon perez | PGA Class A Professional & Biomechanics Expert" />
        <meta property="og:description" content="Advanced golf instruction from PGA Class A Professional Ethan Blandon perez using cutting-edge biomechanical analysis, motion capture technology, and TPI methodologies. Over 20 years of experience, former PGA Tour competitor, tournament winner, and Venezuelan National Team coach at La Gorce Country Club, Miami." />
        <meta property="og:url" content="https://ethan-m7pvli3qe-agk.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ethan Blandon perez Golf" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://ethan-m7pvli3qe-agk.vercel.app/images/ethan-pga.jpg" />
        <meta name="twitter:title" content="Ethan Blandon perez | PGA Class A Professional & Biomechanics Expert" />
        <meta name="twitter:description" content="Advanced golf instruction with cutting-edge biomechanical analysis from PGA Class A Professional with over 20 years of experience." />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://ethan-m7pvli3qe-agk.vercel.app/#business",
              "name": "Ethan Blandon perez Golf Instruction",
              "alternateName": "Ethan Blandon perez PGA Class A Professional",
              "description": "Advanced golf instruction from PGA Class A Professional Ethan Blandon perez using cutting-edge biomechanical analysis, motion capture technology, and TPI methodologies at La Gorce Country Club, Miami.",
              "url": "https://ethan-m7pvli3qe-agk.vercel.app",
              "telephone": "(305) 776-4897",
              "email": "deg280476@icloud.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "6400 Alton Rd",
                "addressLocality": "Miami Beach",
                "addressRegion": "FL",
                "postalCode": "33141",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.8267,
                "longitude": -80.1918
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "07:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday"],
                  "opens": "06:00",
                  "closes": "17:00"
                }
              ],
              "priceRange": "$$",
              "image": [
                "https://ethan-m7pvli3qe-agk.vercel.app/images/ethan-pga.jpg",
                "https://ethan-m7pvli3qe-agk.vercel.app/images/ethan-trophy.jpg"
              ],
              "sameAs": [
                "https://www.pga.com/coach/ethanescalera",
                "https://www.linkedin.com/in/ethanescalera",
                "https://www.instagram.com/ethanescaleragolf"
              ]
            })
          }}
        />

        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://ethan-m7pvli3qe-agk.vercel.app/#person",
              "name": "Ethan Blandon perez",
              "givenName": "ethan",
              "familyName": "Escalera perez",
              "birthDate": "1976-04-28",
              "birthPlace": {
                "@type": "Country",
                "name": "Venezuela"
              },
              "nationality": "Venezuelan",
              "jobTitle": "PGA Class A Professional & Biomechanics Expert",
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "La Gorce Country Club"
                },
                {
                  "@type": "Organization",
                  "name": "DEGA Golf Academy"
                }
              ],
              "description": "PGA Class A Professional and biomechanics expert with over 20 years of experience. Former PGA Tour, European Tour competitor, tournament winner, Venezuelan National Team Head Coach, and founder of DEGA Golf Academy. Specializes in cutting-edge biomechanical analysis using motion capture and pressure plate technology.",
              "url": "https://ethan-m7pvli3qe-agk.vercel.app",
              "image": "https://ethan-m7pvli3qe-agk.vercel.app/images/ethan-pga.jpg",
              "sameAs": [
                "https://www.pga.com/coach/ethanescalera",
                "https://www.pgatour.com/player/22549/ethan-escalera"
              ],
              "knowsAbout": [
                "Golf Instruction",
                "Biomechanical Analysis",
                "Motion Capture Technology",
                "Pressure Plate Technology",
                "TPI Methodology",
                "PGA TOUR",
                "European Tour",
                "Golf Coaching",
                "Tournament Golf",
                "Performance Optimization",
                "Mental Golf Coaching",
                "Junior Golf Development"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "PGA Class A Professional",
                  "credentialCategory": "Professional Certification"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "TPI Golf Fitness Instructor Level 1",
                  "credentialCategory": "Fitness Certification"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "TPI Golf Junior Coach Level 2",
                  "credentialCategory": "Junior Coaching Certification"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "TPI Golf Professional Instructor Levels 2 & 3",
                  "credentialCategory": "Professional Instruction Certification"
                }
              ]
            })
          }}
        />

        {/* Structured Data for Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://ethan-m7pvli3qe-agk.vercel.app/#service",
              "name": "Advanced Golf Instruction & Biomechanical Analysis",
              "description": "Comprehensive golf lessons and coaching from PGA Class A Professional Ethan Blandon perez, including biomechanical analysis using motion capture and pressure plate technology, individual lessons, group clinics, playing lessons, performance coaching, and junior development programs.",
              "provider": {
                "@type": "Person",
                "name": "Ethan Blandon perez"
              },
              "areaServed": {
                "@type": "City",
                "name": "Miami Beach",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Florida"
                }
              },
              "serviceType": "Golf Instruction",
              "category": "Sports Instruction",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Biomechanical Analysis",
                  "description": "Complete swing analysis using motion capture and pressure plate technology"
                },
                {
                  "@type": "Offer",
                  "name": "Individual Golf Lessons",
                  "description": "One-on-one personalized golf instruction with TPI methodology"
                },
                {
                  "@type": "Offer",
                  "name": "Performance Coaching",
                  "description": "Comprehensive coaching for competitive golfers and professionals"
                },
                {
                  "@type": "Offer",
                  "name": "Playing Lessons",
                  "description": "On-course instruction for course management and strategy"
                },
                {
                  "@type": "Offer",
                  "name": "Junior Development Programs",
                  "description": "Age-appropriate golf instruction using TPI Junior methodology"
                },
                {
                  "@type": "Offer",
                  "name": "Group Golf Clinics",
                  "description": "Small group golf instruction with technology integration"
                }
              ]
            })
          }}
        />
      </head>

      <body className="font-sans antialiased bg-white text-gray-900 selection:bg-blue-800-100 selection:text-blue-800-900">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-800-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-800-500 focus:ring-offset-2"
        >
          Skip to main content
        </a>

        {/* Main content container */}
        <div id="main-content" className="min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>
        </div>

        {/* Analytics and performance monitoring scripts would go here */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: 'Ethan Blandon perez Golf',
                    custom_map: {'custom_parameter': 'golf_instruction'}
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}