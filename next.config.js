/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverAction: true,
        serverComponentsExternalPackages: ['mongoose']
    },
    images: {
        domains: ['m.media-amazon.com']
    }
}

module.exports = nextConfig
