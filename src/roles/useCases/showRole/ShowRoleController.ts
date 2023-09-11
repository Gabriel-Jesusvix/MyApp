import { Request, Response } from 'express'
import { ShowRoleRoleUseCase } from './ShowRoleRoleUseCase'
import { container } from 'tsyringe'

export class ShowRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const showRoleRoleUseCase = container.resolve(ShowRoleRoleUseCase)
    const { id } = request.params

    const role = await showRoleRoleUseCase.execute({ id })

    return response.status(201).json(role)
  }
}
