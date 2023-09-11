import { Request, Response } from 'express'
import { DeleteRoleRoleUseCase } from './DeleteRoleRoleUseCase'

export class DeleteRoleController {
  constructor(private deleteRoleRoleUseCase: DeleteRoleRoleUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    await this.deleteRoleRoleUseCase.execute({ id })

    return response.status(204).send()
  }
}
