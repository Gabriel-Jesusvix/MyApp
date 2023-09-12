import { CreateUserController } from '@users/useCases/createUser/CreateUserController'
import { Segments, celebrate, Joi } from 'celebrate'
import { Router } from 'express'
import { container } from 'tsyringe'

const usersRoutes = Router()

const createUserController = container.resolve(CreateUserController)

usersRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      isAdmin: Joi.boolean().required(),
      roleIs: Joi.string().uuid().required(),
    }),
  }),
  (request, response) => {
    createUserController.handle(request, response)
  },
)

export { usersRoutes }
