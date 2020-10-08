// vue.config.js
module.exports = {
  // options...
  devServer: {
    historyApiFallback: true,
    host: process.env.IP,
    port: process.env.PORT,
    allowedHosts: [".amazonaws.com"],
    public: "localhost" //"41c5ac0c5c6b4ae896bd7f60332b851f.vfs.cloud9.eu-west-1.amazonaws.com" //no trailing slash
  },

  pluginOptions: {
    i18n: {
      locale: "fr",
      fallbackLocale: "fr",
      localeDir: "locales",
      enableInSFC: true
    }
  }
};
