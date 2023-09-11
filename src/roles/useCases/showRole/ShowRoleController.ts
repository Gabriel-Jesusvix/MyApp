import { Request, Response } from 'express'
import { ShowRoleRoleUseCase } from './ShowRoleRoleUseCase'

export class ShowRoleController {
  constructor(private showRoleRoleUseCase: ShowRoleRoleUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const role = await this.showRoleRoleUseCase.execute({ id })

    return response.status(201).json(role)
  }
}
