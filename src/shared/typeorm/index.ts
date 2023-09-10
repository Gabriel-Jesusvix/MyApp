import { DataSource } from 'typeorm'
import { CreateRolesTable1694357835931 } from './migrations/1694357835931-CreateRolesTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [CreateRolesTable1694357835931],
})
