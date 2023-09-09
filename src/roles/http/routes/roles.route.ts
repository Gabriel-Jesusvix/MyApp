import { Router } from 'express'
import { RoleRepository } from './repositories/RoleRepository'

const rolesRoutes = Router()
const rolesRepository = new RoleRepository()

rolesRoutes.post('/', (request, response) => {
  const { name } = request.body

  if (!name) {
    response.status(404).json({ message: 'Name is required!' })
  }

  const role = rolesRepository.create({
    name,
  })

  return response.status(201).json(role)
})

rolesRoutes.get('/', (request, response) => {
  const role = rolesRepository.findaAll()

  return response.json(role)
})

export { rolesRoutes }
