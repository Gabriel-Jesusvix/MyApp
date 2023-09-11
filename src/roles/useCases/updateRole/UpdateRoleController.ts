import { Request, Response } from 'express'
import { UpdateRoleRoleUseCase } from './updateRoleRoleUseCase'

export class UpdateRoleController {
  constructor(private updateRoleRoleUseCase: UpdateRoleRoleUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { name } = request.body
    const role = await this.updateRoleRoleUseCase.execute({ id, name })

    return response.status(201).json(role)
  }
}
