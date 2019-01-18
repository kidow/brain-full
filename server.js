require('dotenv').config()
const express = require('express')
const next = require('next')
const routes = require('./lib/nextRoutes')
const { PORT, NODE_ENV } = process.env

const port = parseInt(PORT, 10) || 3000
const dev = NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  require('./lib/moduleAlias')

  server.use(express.json())
  server.use(express.urlencoded({ extended: false }))

  server.use((err, req, res, next) => {
    if (err) {
      console.error(err)
      res.status(err.status)
    }
    res.json({ success: false, message: err.message })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.use(handle).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
