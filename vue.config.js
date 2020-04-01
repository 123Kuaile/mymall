module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'common': '@/common',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },
  publicPath: './'
}