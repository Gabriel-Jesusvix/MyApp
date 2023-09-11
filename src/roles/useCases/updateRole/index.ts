import { RoleRepository } from '@roles/repositories/RoleRepository'
import { UpdateRoleRoleUseCase } from './UpdateRoleRoleUseCase'
import { UpdateRoleController } from './UpdateRoleController'
const rolesRepository = RoleRepository.getInstance()
const showRoleUseCases = new UpdateRoleRoleUseCase(rolesRepository)
export const updateRoleController = new UpdateRoleController(showRoleUseCases)
