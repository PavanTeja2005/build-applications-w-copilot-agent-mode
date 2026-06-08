import express, { Request, Response } from 'express'
import dbConfig from './config/database'

const app = express()
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000

app.use(express.json())

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'OctoFit Tracker API' })
})

app.get('/', (_req: Request, res: Response) => {
  res.send('Welcome to OctoFit Tracker backend')
})

dbConfig.connectDatabase()
  .then(() => {
    console.log('Connected to MongoDB at', dbConfig.uri)
    app.listen(PORT, () => {
      console.log(`Backend listening on http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err)
    process.exit(1)
  })
