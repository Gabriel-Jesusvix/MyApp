import { Role } from '@roles/entities/Role'
import { RoleRepository } from '@roles/repositories/RoleRepository'
import { AppError } from '@shared/errors/AppError'

type ShowRoleParams = {
  id: string
}
export class ShowRoleRoleUseCase {
  constructor(private rolesRepository: RoleRepository) {}

  async execute({ id }: ShowRoleParams): Promise<Role> {
    const role = await this.rolesRepository.findById(id)

    if (!role) {
      throw new AppError('Role Not Found', 404)
    }

    return role
  }
}
