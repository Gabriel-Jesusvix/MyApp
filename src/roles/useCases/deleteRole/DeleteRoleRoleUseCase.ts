import { RoleRepository } from '@roles/repositories/RoleRepository'
import { AppError } from '@shared/errors/AppError'

type UpdateRoleParams = {
  id: string
}
export class DeleteRoleRoleUseCase {
  constructor(private rolesRepository: RoleRepository) {}

  async execute({ id }: UpdateRoleParams): Promise<void> {
    const role = await this.rolesRepository.findById(id)

    if (!role) {
      throw new AppError('Role Not Found', 404)
    }

    await this.rolesRepository.delete(role)
  }
}
