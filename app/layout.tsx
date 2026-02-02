import './globals.css'
import { inter } from '@/app/fonts'
import { AnimatedHeroBackground } from '@/app/components/animated-hero-background'
import { ScrollToTop } from '@/app/components/scroll-to-top'

export const metadata = {
  title: "SwarmForge - Build AI Agent Swarms Without Code",
  description: "Describe what you need. SwarmForge builds autonomous agent teams that work together to complete complex tasks.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "SwarmForge - Build AI Agent Swarms Without Code",
    description: "Describe what you need. SwarmForge builds autonomous agent teams that work together to complete complex tasks.",
    images: [{
      url: 'https://mrcharlesiv.github.io/swarmforge/og-image.png',
      width: 1200,
      height: 630,
      alt: 'SwarmForge OG Image',
    }],
    url: 'https://mrcharlesiv.github.io/swarmforge/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SwarmForge - Build AI Agent Swarms Without Code",
    description: "Describe what you need. SwarmForge builds autonomous agent teams that work together to complete complex tasks.",
    image: 'https://mrcharlesiv.github.io/swarmforge/og-image.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="canonical" href="https://mrcharlesiv.github.io/swarmforge/" />
      </head>
      <body className={`${inter.className} min-h-screen bg-[#0a0f1c] text-white`}>
        <AnimatedHeroBackground />

        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg">
          Skip to main content
        </a>

        <main id="main-content">
          {children}
        </main>

        {/* Scroll to top button */}
        <ScrollToTop />
      </body>
    </html>
  )
}
