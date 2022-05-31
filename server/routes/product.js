const { renderAndCache } = require('../lib/ssr')

exports.index = (app) => (req, res) => {
  const actualPage = '/product'
  return renderAndCache(app, req, res, actualPage);
}