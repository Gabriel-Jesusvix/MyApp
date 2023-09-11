import { container } from 'tsyringe'

import { IRolesRepository } from '@roles/repositories/IRolesRepository'
import { RoleRepository } from '@roles/repositories/RoleRepository'
import { CreateRoleController } from '@roles/useCases/createRole/CreateRoleController'
import { DeleteRoleController } from '@roles/useCases/deleteRole/DeleteRoleController'
import { ListRoleController } from '@roles/useCases/listRole/ListRoleController'
import { ShowRoleController } from '@roles/useCases/showRole/ShowRoleController'
import { UpdateRoleController } from '@roles/useCases/updateRole/UpdateRoleController'

container.registerSingleton<IRolesRepository>('RolesRepository', RoleRepository)
container.registerSingleton('CreateRoleController', CreateRoleController)
container.registerSingleton('ListRolesController', ListRoleController)
container.registerSingleton('ShowRoleController', ShowRoleController)
container.registerSingleton('UpdateRoleController', UpdateRoleController)
container.registerSingleton('DeleteRoleController', DeleteRoleController)
