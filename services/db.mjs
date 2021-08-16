import pg from 'pg'

const { Pool } = pg

const connectionDetail = {
  host: 'localhost',
  port: 5432,
  database: 'rewose',
  user: 'rewose',
  password: 'rewose'
}

const db = new Pool(connectionDetail)

export default db
