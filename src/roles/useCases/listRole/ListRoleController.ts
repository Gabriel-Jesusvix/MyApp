import { Request, Response } from 'express'
import { ListRoleUseCases } from './ListRoleUseCases'

export class ListRoleController {
  constructor(private listRolesUseCases: ListRoleUseCases) {}

  handle(request: Request, response: Response) {
    const roles = this.listRolesUseCases.execute()

    return response.json(roles)
  }
}
