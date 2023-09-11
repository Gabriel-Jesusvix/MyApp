import { Request, Response } from 'express'
import { DeleteRoleRoleUseCase } from './DeleteRoleRoleUseCase'
import { container } from 'tsyringe'

export class DeleteRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const deleteRoleRoleUseCase = container.resolve(DeleteRoleRoleUseCase)
    const { id } = request.params
    await deleteRoleRoleUseCase.execute({ id })

    return response.status(204).send()
  }
}
