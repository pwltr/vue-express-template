import express from 'express'
import cors from 'cors'

import { env } from './utils/env'
import sequelize from './utils/database'
import { CounterController } from './controllers/counter'

const app = express()

// Enable CORS
app.use(cors())

// GET method route
app.get('/', async function(req, res) {
  // Get current number
  const currentNumber = await CounterController.get()
  res.json({ currentNumber })
})

// POST method route
app.post('/', async function(req, res) {
  // Increment counter
  await CounterController.increment()

  // Get current number
  const currentNumber = await CounterController.get()
  res.json({ currentNumber })
})

const main = async () => {
  try {
    // Sync models with DB
    await sequelize.sync({ force: true })

    // Start server
    app.listen(env('API_PORT'), () => {
      console.log('\x1b[33m%s\x1b[0m', `Server is running at https://localhost:${env('API_PORT')}`)
    })
  } catch (error) {
    console.log(error)
  }
}

main()
