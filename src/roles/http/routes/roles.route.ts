import { createRoleController } from '@roles/useCases/createRole'
import { listRoleController } from '@roles/useCases/listRole'
import { Router } from 'express'

const rolesRoutes = Router()

rolesRoutes.post('/', (request, response) => {
  return createRoleController.handle(request, response)
})

rolesRoutes.get('/', (request, response) => {
  return listRoleController.handle(request, response)
})

export { rolesRoutes }
