import { rolesRoutes } from '@roles/http/routes/roles.route'
import { usersRoutes } from '@users/http/routes/users.routes'
import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello world!' })
})

routes.use('/roles', rolesRoutes)
routes.use('/users', usersRoutes)
export { routes }
