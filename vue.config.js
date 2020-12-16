//添加额外的配置，由于vue3将配置隐藏,所以要想添加额外配置需要在项目根文件中创建vue.config.js文件做配置,之后vue会自动拼接这些配置
//可参考vue2中build/webpack.base.config.js中的resolve

//路径
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'network': '@/network',
        'components': '@/components',
        'views': '@/views',
      }
    }
  }
}