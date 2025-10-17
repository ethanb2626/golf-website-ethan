// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ethangolf.company"),
  title: {
    default: "Get Into Golf with Ethan | Golf Lessons & Coaching in Miami",
    template: "%s | Get Into Golf with Ethan",
  },
  description:
    "Personalized golf lessons in Miami with Ethan Blandon. Fundamentals-first coaching, simple drills, and steady progress for all levels.",
  keywords: [
    "golf lessons Miami",
    "golf instructor Ethan Blandon",
    "beginner golf coaching",
    "private golf instruction",
    "golf swing basics",
    "golf drills",
    "golf coaching Miami",
  ],
  authors: [{ name: "Ethan Blandon", url: "https://ethangolf.company" }],
  creator: "Ethan Blandon",
  publisher: "Get Into Golf with Ethan",
  category: "Sports & Recreation",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "https://ethangolf.company" },

  // ✅ FAVICONS & APP ICONS (cache-busted)
  icons: {
    icon: "/icon.png?v=2",   // src/app/icon.png (512x512 PNG, transparent)
    apple: "/icon.png?v=2",
  },

  // ✅ SOCIAL PREVIEW
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ethangolf.company",
    siteName: "Get Into Golf with Ethan",
    title: "Get Into Golf with Ethan | Golf Lessons & Coaching in Miami",
    description:
      "Beginner-friendly golf instruction with a focus on strong fundamentals and enjoyable practice.",
    images: [
      {
        url: "/images/og.jpg?v=2", // put a 1200x630 jpg here
        width: 1200,
        height: 630,
        alt: "Ethan Blandon - Golf Instructor",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Into Golf with Ethan | Golf Lessons & Coaching in Miami",
    description:
      "Friendly, fundamentals-first golf coaching in Miami with Ethan Blandon.",
    images: ["/images/og.jpg?v=2"],
    creator: "@getintogolf",
  },

  // Optional site theme color
  other: {
    "theme-color": "#059669",
    "msapplication-TileColor": "#059669",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Manifest (see public/manifest.json below) */}
        <link rel="manifest" href="/manifest.json" />
        {/* NOTE: No inline <link rel="icon" ...> here so Next.js uses /icon.png */}
      </head>

      <body className="font-sans antialiased bg-white text-gray-900 selection:bg-blue-800-100 selection:text-blue-800-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Skip to main content
        </a>

        <div id="main-content" className="min-h-screen flex flex-col">
          <main className="flex-grow">{children}</main>
        </div>

        {/* Analytics (kept off in dev) */}
        {process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
