const path = require('path')
const isDev = process.env.NODE_ENV === 'development'

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    if (isDev) {
      config.devtool = 'cheap-source-map'
    }
  },
  publicPath: '/e-admin/',
  outputDir: 'docs',
  devServer: {
    port: 9000,
    overlay: {
      warnings: true,
      errors: true
    }
    // proxy: {
    //   // change xxx-api/login => mock/login
    //   // detail: https://cli.vuejs.org/config/#devserver-proxy
    // }
  },
  pluginOptions: {
    // import global scss variables and mixins
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [resolve('./src/assets/styles/global.scss')]
    }
  }
}
