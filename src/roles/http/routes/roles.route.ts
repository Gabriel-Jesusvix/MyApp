import { Role } from '@roles/entities/Role'
import { Router } from 'express'
const rolesRoutes = Router()

const roles: Role[] = []

rolesRoutes.post('/', (request, response) => {
  const { name } = request.body

  const role = new Role()

  Object.assign(role, { name, created_at: new Date() }) // merge with existing role

  roles.push(role)

  return response.status(201).json(roles)
})

export { rolesRoutes }
