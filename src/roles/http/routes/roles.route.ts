import { Router } from 'express'
import { RoleRepository } from './repositories/RoleRepository'

const rolesRoutes = Router()
const rolesRepository = new RoleRepository()

rolesRoutes.post('/', (request, response) => {
  const { name } = request.body
  const role = rolesRepository.create({
    name,
  })

  return response.status(201).json(role)
})

export { rolesRoutes }
