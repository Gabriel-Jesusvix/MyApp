import { Request, Response } from 'express'
import { ListRoleUseCases } from './ListRoleUseCases'

export class ListRoleController {
  constructor(private listRolesUseCases: ListRoleUseCases) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const page =
      request.query.page && Number(request.query.page) > 0
        ? Number(request.query.page)
        : 1

    const limit =
      request.query.limit && Number(request.query.limit) > 0
        ? Number(request.query.limit)
        : 15

    const roles = await this.listRolesUseCases.execute({
      page,
      limit,
    })

    return response.json(roles)
  }
}
