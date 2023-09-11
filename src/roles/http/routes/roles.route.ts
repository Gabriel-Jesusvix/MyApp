import { createRoleController } from '@roles/useCases/createRole'
import { deleteRoleController } from '@roles/useCases/deleteRole'
import { listRoleController } from '@roles/useCases/listRole'
import { showRoleController } from '@roles/useCases/showRole'
import { updateRoleController } from '@roles/useCases/updateRole'
import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'

const rolesRoutes = Router()

rolesRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  (request, response) => {
    return createRoleController.handle(request, response)
  },
)

rolesRoutes.get(
  '/',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
      limit: Joi.number(),
    }),
  }),
  (request, response) => {
    return listRoleController.handle(request, response)
  },
)
rolesRoutes.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (request, response) => {
    return showRoleController.handle(request, response)
  },
)
rolesRoutes.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  (request, response) => {
    return updateRoleController.handle(request, response)
  },
)
rolesRoutes.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (request, response) => {
    return deleteRoleController.handle(request, response)
  },
)

export { rolesRoutes }
