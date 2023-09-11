import { RolesPaginateProperties } from '@roles/repositories/IRolesRepository'
import { IRolesRepository } from '@roles/repositories/IRolesRepository'
import { injectable, inject } from 'tsyringe'

type ListRolesUseCaseParams = {
  page: number
  limit: number
}

@injectable()
export class ListRoleUseCases {
  constructor(
    @inject('RolesRepository')
    private rolesRepository: IRolesRepository,
  ) {}

  async execute({
    page,
    limit,
  }: ListRolesUseCaseParams): Promise<RolesPaginateProperties> {
    const take = limit
    const skip = Number(page - 1) * take

    return await this.rolesRepository.findAll({
      page,
      skip,
      take,
    })
  }
}
