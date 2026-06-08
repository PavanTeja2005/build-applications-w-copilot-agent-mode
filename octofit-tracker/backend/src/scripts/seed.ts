import mongoose from 'mongoose'
import dbConfig from '../config/database'

/**
 * Seed the octofit_db database with test data for users and activities.
 */
async function seed() {
  await dbConfig.connectDatabase()

  const sampleData = {
    users: [
      { name: 'Alex', email: 'alex@octofit.example' },
      { name: 'Jordan', email: 'jordan@octofit.example' },
    ],
    activities: [
      { user: 'Alex', type: 'running', duration: 30 },
      { user: 'Jordan', type: 'cycling', duration: 45 },
    ],
  }

  console.log('Seeding octofit_db with test data:', sampleData)

  await mongoose.connection.close()
}

seed().catch((error) => {
  console.error('Seed failed:', error)
  process.exit(1)
})
