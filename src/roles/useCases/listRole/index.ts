import { RoleRepository } from '@roles/repositories/RoleRepository'
import { ListRoleUseCases } from './ListRoleUseCases'
import { ListRoleController } from './ListRoleController'

const rolesRepository = new RoleRepository()
const listRolesUseCases = new ListRoleUseCases(rolesRepository)
export const listRoleController = new ListRoleController(listRolesUseCases)