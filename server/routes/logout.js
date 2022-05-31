const { renderAndCache } = require('../lib/ssr')

exports.index = (app) => (req, res) => {
  const actualPage = '/logout'
  return renderAndCache(app, req, res, actualPage);
}