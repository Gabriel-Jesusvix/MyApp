import { RoleRepository } from '@roles/repositories/RoleRepository'
import { DeleteRoleRoleUseCase } from './DeleteRoleRoleUseCase'
import { DeleteRoleController } from './DeleteRoleController'
const rolesRepository = RoleRepository.getInstance()
const showRoleUseCases = new DeleteRoleRoleUseCase(rolesRepository)
export const deleteRoleController = new DeleteRoleController(showRoleUseCases)
