/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    // Keep compatibility with static sites.
    images: { unoptimized: true },
    // Use the name of your repository as the basePath and assetPrefix
    basePath: '/lexpipe.github.io',
    assetPrefix: '/lexpipe.github.io/',
}

module.exports = nextConfig
