const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/auth",
    proxy({
      target: "https://login.globo.com",
      changeOrigin: true,
      ssl: false,
      pathRewrite: {
        "^/auth": ""
      }
    })
  );
};
