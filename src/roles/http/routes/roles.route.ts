import { Router } from 'express'
import { RoleRepository } from './repositories/RoleRepository'

const rolesRoutes = Router()
const rolesRepository = new RoleRepository()

rolesRoutes.post('/', (request, response) => {
  const { name } = request.body

  const roleAlreadyExists = rolesRepository.findByName(name)
  if (roleAlreadyExists) {
    response
      .status(400)
      .json({ message: 'Role exists, try again role diferent!' })
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
