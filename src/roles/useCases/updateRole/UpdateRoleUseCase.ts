import { Role } from '@roles/entities/Role'
import { IRolesRepository } from '@roles/repositories/IRolesRepository'
import { AppError } from '@shared/errors/AppError'
import { injectable, inject } from 'tsyringe'

type UpdateRoleDTO = {
  id: string
  name: string
}
@injectable()
export class UpdateRoleUseCase {
  constructor(
    @inject('RolesRepository')
    private rolesRepository: IRolesRepository,
  ) {}

  async execute({ id, name }: UpdateRoleDTO): Promise<Role> {
    const role = await this.rolesRepository.findById(id)
    const nameAlredyexists = await this.rolesRepository.findByName(name)

    if (!role) {
      throw new AppError('Role Not Found', 404)
    }
    if (nameAlredyexists && role.name !== nameAlredyexists.name) {
      throw new AppError('Role name not informad or already in use ', 404)
    }

    role.name = name

    return this.rolesRepository.save(role)
  }
}
