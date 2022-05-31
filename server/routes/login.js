const { renderAndCache } = require('../lib/ssr')

exports.index = (app) => (req, res) => {
  const actualPage = '/login'
  return renderAndCache(app, req, res, actualPage);
}