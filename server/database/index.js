require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  database: process.env.DB_NAME || 'sdcreviews',
  password: process.env.DB_PASSWORD || '',
  max: 20
})

// const pool = new Pool()

// ERR ON CLIENT BEHALF, PARTION OR BACKEND ERR
// TODO: look up from docs
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

pool.connect()
  .then((client) => {
    console.log(`pool connected to ${client.user}@${client.host} using database ${client.database} on port ${client.port}`)
  })
  .catch((err) => {
    console.log('ERR DATABASE CONNECT', err)
  })

// pool.on('connect', (client) => {
//   console.log(`pool connected to ${client.user}@${client.host} using database ${client.database} on port ${client.port}`)
// })

  module.exports = pool;