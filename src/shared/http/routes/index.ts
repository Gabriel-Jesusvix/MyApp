import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
  throw new Error('Acesso negado!', 401)
})

export { routes }
