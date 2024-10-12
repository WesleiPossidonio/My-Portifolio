const SitemapPlugin = require('sitemap-webpack-plugin').default

const paths = [
  {
    path: '/',
    lastmod: '2024-10-12',
    priority: 1.0,
    changefreq: 'daily'
  },
  {
    path: '/briefing',
    lastmod: '2024-10-10',
    priority: 0.8,
    changefreq: 'monthly'
  }
  // Adicione mais rotas conforme necessário
]

module.exports = function override(config) {
  config.plugins.push(
    new SitemapPlugin({ base: 'https://www.wesleifranca.com.br/', paths })
  )
  return config
}
