/* eslint-disable*/ const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/intervi", { target: "http://localhost:9000/" }));
};
