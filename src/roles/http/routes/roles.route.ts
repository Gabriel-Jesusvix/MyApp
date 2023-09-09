import { RoleRepository } from '@roles/repositories/RoleRepository'
import { createRoleController } from '@roles/useCases/createRole'
import { Router } from 'express'

const rolesRoutes = Router()
const rolesRepository = new RoleRepository()

rolesRoutes.post('/', (request, response) => {
  return createRoleController.handle(request, response)
})

rolesRoutes.get('/', (request, response) => {
  const role = rolesRepository.findaAll()

  return response.json(role)
})

export { rolesRoutes }
