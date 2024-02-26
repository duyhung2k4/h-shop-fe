/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      }
    )
    return config;
  }
};



export default nextConfig;
