/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true'; // Use custom env var
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGitHubPages ? '' : '',
  assetPrefix: isGitHubPages ? '' : '',
}

export default nextConfig
