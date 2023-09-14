import { DataSource } from 'typeorm'
import { CreateRolesTable1694357835931 } from './migrations/1694357835931-CreateRolesTable'
import { Role } from '@roles/entities/Role'
import { CreateUsersTable1694455057113 } from './migrations/1694455057113-CreateUsersTable'
import { AddRoleIdToUsersTable1694470144794 } from './migrations/1694470144794-AddRoleIdToUsersTable'
import { User } from '@users/entities/User'
import { CreateRefreshTokensTable1663817458499 } from './migrations/1694715442105-CreateRefreshTokensTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role, User],
  migrations: [
    CreateRolesTable1694357835931,
    CreateUsersTable1694455057113,
    AddRoleIdToUsersTable1694470144794,
    CreateRefreshTokensTable1663817458499,
  ],
})
