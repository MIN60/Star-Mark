const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: "http://192.249.18.163:80",
            changeOrigin: true
        })
    );
};