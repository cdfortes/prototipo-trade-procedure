// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})

module.exports = {
  images: {
    domains: ['avatars3.githubusercontent.com']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true
  }
}
