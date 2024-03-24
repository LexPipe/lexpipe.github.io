/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    // Keep compatibility with static sites.
    images: { unoptimized: true },
}

module.exports = nextConfig
