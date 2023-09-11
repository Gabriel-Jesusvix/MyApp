import { createRoleController } from '@roles/useCases/createRole'
import { deleteRoleController } from '@roles/useCases/deleteRole'
import { listRoleController } from '@roles/useCases/listRole'
import { showRoleController } from '@roles/useCases/showRole'
import { updateRoleController } from '@roles/useCases/updateRole'
import { Router } from 'express'

const rolesRoutes = Router()

rolesRoutes.post('/', (request, response) => {
  return createRoleController.handle(request, response)
})

rolesRoutes.get('/', (request, response) => {
  return listRoleController.handle(request, response)
})
rolesRoutes.get('/:id', (request, response) => {
  return showRoleController.handle(request, response)
})
rolesRoutes.put('/:id', (request, response) => {
  return updateRoleController.handle(request, response)
})
rolesRoutes.delete('/:id', (request, response) => {
  return deleteRoleController.handle(request, response)
})

export { rolesRoutes }
