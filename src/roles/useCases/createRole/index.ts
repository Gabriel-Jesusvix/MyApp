import { RoleRepository } from '@roles/repositories/RoleRepository'
import { CreateRoleUseCase } from './CreateRoleUseCase'
import { CreateRoleController } from './CreateRoleController'

const rolesRepository = new RoleRepository()
const createRoleUseCases = new CreateRoleUseCase(rolesRepository)
export const createRoleController = new CreateRoleController(createRoleUseCases)
