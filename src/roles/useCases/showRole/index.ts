import { RoleRepository } from '@roles/repositories/RoleRepository'
import { ShowRoleRoleUseCase } from './ShowRoleRoleUseCase'
import { ShowRoleController } from './ShowRoleController'
const rolesRepository = RoleRepository.getInstance()
const showRoleUseCases = new ShowRoleRoleUseCase(rolesRepository)
export const showRoleController = new ShowRoleController(showRoleUseCases)
