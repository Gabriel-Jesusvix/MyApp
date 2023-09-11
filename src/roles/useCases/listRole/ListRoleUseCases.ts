import {
  RoleRepository,
  RolesPaginateProperties,
} from '@roles/repositories/RoleRepository'

type ListRolesUseCaseParams = {
  page: number
  limit: number
}
export class ListRoleUseCases {
  constructor(private rolesRepository: RoleRepository) {}

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
