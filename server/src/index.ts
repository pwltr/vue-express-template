import express from 'express'
import cors from 'cors'

import { env } from './utils/env'
import sequelize from './utils/database'

const app = express()

// Enable CORS
app.use(cors())

// GET method route
app.get('/', function(req, res) {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', function(req, res) {
  res.send('POST request to the homepage')
})

const main = async () => {
  try {
    await sequelize.sync({ force: true })

    // Start server
    app.listen(process.env.API_PORT, () => {
      console.log('\x1b[33m%s\x1b[0m', `Server is running at https://localhost:${env('API_PORT')}`)
    })
  } catch (error) {
    console.log(error)
  }
}

main()
