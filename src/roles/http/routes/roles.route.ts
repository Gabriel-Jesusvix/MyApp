import { createRoleController } from '@roles/useCases/createRole'
import { listRoleController } from '@roles/useCases/listRole'
import { showRoleController } from '@roles/useCases/showRole'
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

export { rolesRoutes }
