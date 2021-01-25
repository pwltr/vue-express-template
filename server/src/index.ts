import express from 'express'
import cors from 'cors'
import * as WebSocket from 'ws'

import { env } from './utils/env'
import sequelize from './utils/database'
import { CounterController } from './controllers/counter'

const app = express()
const wss = new WebSocket.Server({ noServer: true })

// Enable CORS
app.use(cors())

const getNumberAndBroadcast = async () => {
  const currentNumber = await CounterController.get()

  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(currentNumber)
    }
  })
}

wss.on('connection', async (socket: WebSocket) => {
  // Get current number
  // TODO: send only to new connection
  getNumberAndBroadcast()

  socket.on('message', async () => {
    // Increment counter
    await CounterController.increment()

    // and broadcast the new number
    getNumberAndBroadcast()
  })
})

const main = async () => {
  try {
    // Sync models with DB
    await sequelize.sync({ force: true })

    // Start server
    const server = app.listen(env('API_PORT'), () => {
      console.log('\x1b[33m%s\x1b[0m', `Server is running at https://localhost:${env('API_PORT')}`)
    })

    // Connect websocket server
    server.on('upgrade', (request, socket, head) => {
      wss.handleUpgrade(request, socket, head, socket => {
        wss.emit('connection', socket, request)
      })
    })
  } catch (error) {
    console.log(error)
  }
}

main()
