import { DataSource } from 'typeorm'
import { CreateRolesTable1694357835931 } from './migrations/1694357835931-CreateRolesTable'
import { Role } from '@roles/entities/Role'
import { CreateUsersTable1694455057113 } from './migrations/1694455057113-CreateUsersTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1694357835931, CreateUsersTable1694455057113],
})
