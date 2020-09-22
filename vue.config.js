module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'newwork': '@/newwork',
        'views': '@/views',
      }
    }
  }
}