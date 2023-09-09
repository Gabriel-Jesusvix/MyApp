import { rolesRoutes } from '@roles/http/routes/roles.route'
import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello world!' })
})

routes.use('/roles', rolesRoutes)
export { routes }
