import { IRolesRepository } from '@roles/repositories/IRolesRepository'
import { AppError } from '@shared/errors/AppError'
import { injectable, inject } from 'tsyringe'

type UpdateRoleParams = {
  id: string
}
@injectable()
export class DeleteRoleRoleUseCase {
  constructor(
    @inject('RolesRepository')
    private rolesRepository: IRolesRepository,
  ) {}

  async execute({ id }: UpdateRoleParams): Promise<void> {
    const role = await this.rolesRepository.findById(id)

    if (!role) {
      throw new AppError('Role Not Found', 404)
    }

    await this.rolesRepository.delete(role)
  }
}
