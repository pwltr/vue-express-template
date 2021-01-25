import { DataTypes, Model } from 'sequelize'
import sequelize from '../utils/database'

interface CounterInstance extends Model {
  id: number
  value: number
}

const Counter = sequelize.define<CounterInstance>('counter', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  value: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
})

export default Counter
