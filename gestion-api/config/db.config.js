import pg from 'pg'
import 'dotenv/config'

export default new pg.Pool({
  connectionString: process.env.DATA,
  ssl: !(process.env.PORT)
})
