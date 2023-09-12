import { CreateUserController } from '@users/useCases/createUser/CreateUserController'
import { ListUsersController } from '@users/useCases/listUsers/ListUsersController'
import { Segments, celebrate, Joi } from 'celebrate'
import { Router } from 'express'
import { container } from 'tsyringe'

const usersRoutes = Router()

const createUserController = container.resolve(CreateUserController)
const listUserController = container.resolve(ListUsersController)

usersRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      isAdmin: Joi.boolean().required(),
      roleId: Joi.string().uuid().required(),
    }),
  }),
  (request, response) => {
    createUserController.handle(request, response)
  },
)
usersRoutes.get(
  '/',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
      limit: Joi.number(),
    }),
  }),
  (request, response) => {
    listUserController.handle(request, response)
  },
)

export { usersRoutes }
