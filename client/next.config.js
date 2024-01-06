const path = require('path')
// const { withSentryConfig } = require("@sentry/nextjs");

module.exports.srcDir = path.resolve('.')

const nextConfig = {
  // reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  async headers() {
    const defaultHeaders = ['X-CSRF-Token']
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true'
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          },
        ]
      },
      {
        source: '/api/login',
        headers: [
          {
            key: 'Access-Control-Allow-Methods',
            value: 'POST'
          }
          // {
          //   key: 'Access-Control-Allow-Headers',
          //   value: [...defaultHeaders].join()
          // }
        ]
      }
    ]
  }
}

module.exports = nextConfig

// module.exports = withSentryConfig(
//   module.exports,
//   {
//     silent: true,

//     org: "te1m0z-company",
//     project: "javascript-nextjs",
//   },
//   {
//     // For all available options, see:
//     // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

//     // Upload a larger set of source maps for prettier stack traces (increases build time)
//     widenClientFileUpload: true,

//     // Transpiles SDK to be compatible with IE11 (increases bundle size)
//     transpileClientSDK: true,

//     // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
//     tunnelRoute: "/monitoring",

//     // Hides source maps from generated client bundles
//     hideSourceMaps: true,

//     // Automatically tree-shake Sentry logger statements to reduce bundle size
//     disableLogger: true,
//   }
// );
