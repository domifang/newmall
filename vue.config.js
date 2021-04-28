module.exports = {
    devServer: {
        port: 8080,
        host: 'localhost',
        open: true //配置浏览器自动访问
    },
    publicPath: './',
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'common': '@/common',
                'network': '@/network',
                'views': '@/views'
            }
        },
        plugins: [

        ]
    },
    chainWebpack: config => {
        // config.module
        //   .rule('vue')
        //   .use('vue-loader')
        //     .tap(options => {
        //       // 修改它的选项...
        //       return options
        //     })
      }
}