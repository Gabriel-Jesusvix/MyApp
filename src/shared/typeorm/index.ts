import { DataSource } from 'typeorm'
import { CreateRolesTable1694357835931 } from './migrations/1694357835931-CreateRolesTable'
import { Role } from '@roles/entities/Role'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1694357835931],
})
