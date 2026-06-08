import express, { Request, Response } from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit'

app.use(express.json())

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'OctoFit Tracker API' })
})

app.get('/', (_req: Request, res: Response) => {
  res.send('Welcome to OctoFit Tracker backend')
})

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB at', MONGO_URI)
    app.listen(PORT, () => {
      console.log(`Backend listening on http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err)
    process.exit(1)
  })
