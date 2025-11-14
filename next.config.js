/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Preserve French public URLs for SEO (marketing routes)
      {
        source: '/inscription',
        destination: '/signup',
      },
      {
        source: '/tarifs',
        destination: '/pricing',
      },
      {
        source: '/offre',
        destination: '/offer',
      },
      {
        source: '/paiement',
        destination: '/payment',
      },
      {
        source: '/demo-vocale',
        destination: '/voice-demo',
      },
      {
        source: '/tableau-de-bord-apercu',
        destination: '/dashboard-preview',
      },
      // App routes (internal, can use English)
      {
        source: '/tableau-de-bord',
        destination: '/dashboard',
      },
    ]
  },
}

module.exports = nextConfig

