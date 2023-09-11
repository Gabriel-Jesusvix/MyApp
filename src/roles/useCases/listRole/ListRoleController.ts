import { Request, Response } from 'express'
import { ListRoleUseCases } from './ListRoleUseCases'
import { container } from 'tsyringe'

export class ListRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listRoleUseCase = container.resolve(ListRoleUseCases)

    const page =
      request.query.page && Number(request.query.page) > 0
        ? Number(request.query.page)
        : 1

    const limit =
      request.query.limit && Number(request.query.limit) > 0
        ? Number(request.query.limit)
        : 15

    const roles = await listRoleUseCase.execute({
      page,
      limit,
    })

    return response.json(roles)
  }
}
