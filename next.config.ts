/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isGitHubPages ? '/ui' : '',
  assetPrefix: isGitHubPages ? '/ui/' : '',
};

export default nextConfig;