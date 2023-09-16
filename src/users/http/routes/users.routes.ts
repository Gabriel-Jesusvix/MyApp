import { isAuthenticated } from '@shared/http/middlewares/isAuthenticated'
import { CreateLoginController } from '@users/useCases/createLogin/CreateLoginController'
import { CreateUserController } from '@users/useCases/createUser/CreateUserController'
import { ListUsersController } from '@users/useCases/listUsers/ListUsersController'
import { Segments, celebrate, Joi } from 'celebrate'
import { Router } from 'express'
import multer from 'multer'
import { container } from 'tsyringe'
import uploadConfig from '@config/upload'
import { UpdateAvatarController } from '@users/useCases/updateAvatar/UpdateAvatarController'
import { ShowProfileController } from '@users/useCases/showProfile/ShowProfileController'
import { UpdateProfileController } from '@users/useCases/updateProfile/UpdateProfileController'
import { CreateAccessAndRefreshTokenController } from '@users/useCases/createAccessAndRefreshToken/CreateAccessAndRefreshTokenController'
import { addUserInfoToRequest } from '../middleware/addUserInfoToRequest'

const usersRoutes = Router()
const createUserController = container.resolve(CreateUserController)
const createLoginController = container.resolve(CreateLoginController)
const listUserController = container.resolve(ListUsersController)
const updateAvatarController = container.resolve(UpdateAvatarController)
const showProfileController = container.resolve(ShowProfileController)
const updateProfileController = container.resolve(UpdateProfileController)
const createAccessAndRefreshTokenController = container.resolve(
  CreateAccessAndRefreshTokenController,
)
const upload = multer(uploadConfig)

usersRoutes.get(
  '/',
  isAuthenticated,
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

usersRoutes.post(
  '/session',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  }),
  (request, response) => {
    createLoginController.handle(request, response)
  },
)

usersRoutes.post(
  '/refresh_token',
  addUserInfoToRequest,
  celebrate({
    [Segments.BODY]: {
      refresh_token: Joi.string().required(),
    },
  }),
  (request, response) => {
    return createAccessAndRefreshTokenController.handle(request, response)
  },
)

usersRoutes.post(
  '/',
  isAuthenticated,
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

usersRoutes.patch(
  '/avatar',
  isAuthenticated,
  upload.single('avatar'),
  (request, response) => {
    updateAvatarController.handle(request, response)
  },
)
usersRoutes.get('/profile', isAuthenticated, (request, response) => {
  showProfileController.handle(request, response)
})

usersRoutes.put(
  '/profile',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      old_password: Joi.string(),
      password: Joi.string().optional(),
      password_confirmation: Joi.string()
        .valid(Joi.ref('password'))
        .when('password', {
          is: Joi.exist(),
          then: Joi.required(),
        }),
    }),
  }),
  (request, response) => {
    updateProfileController.handle(request, response)
  },
)

export { usersRoutes }
