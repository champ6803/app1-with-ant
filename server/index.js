const express = require('express')
const next = require('next')
require("dotenv").config();

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  // routes
  const home = require("./routes/home");
  const login = require("./routes/login");
  const logout = require("./routes/logout");
  const product = require("./routes/product");

  // pages
  server.get("/", home.index(app));
  server.get("/login", login.index(app));
  server.get("/logout", logout.index(app));
  server.get("/product", product.index(app));

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})