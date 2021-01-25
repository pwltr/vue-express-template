import { Sequelize } from 'sequelize'
import { env } from '../utils/env'

// Connect DB
const sequelize = new Sequelize(env('POSTGRES_DATABASE'), env('POSTGRES_USER'), env('POSTGRES_PASSWORD'), {
  host: process.env.NODE_ENV === 'local' ? 'localhost' : env('POSTGRES_HOST'),
  dialect: 'postgres',
})

export default sequelize
