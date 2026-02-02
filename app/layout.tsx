import './globals.css'

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
      url: '/og-image.png',
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
    image: '/og-image.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://mrcharlesiv.github.io/swarmforge/" />
      </head>
      <body className="min-h-screen bg-[#0a0f1c] text-white">
        {children}
      </body>
    </html>
  )
}
