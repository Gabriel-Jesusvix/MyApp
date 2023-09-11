import { Role } from '@roles/entities/Role'
import { RoleRepository } from '@roles/repositories/RoleRepository'
import { AppError } from '@shared/errors/AppError'

type CreateRoleDTO = {
  name: string
}
export class CreateRoleUseCase {
  constructor(private rolesRepository: RoleRepository) {}

  async execute({ name }: CreateRoleDTO): Promise<Role> {
    const roleAlreadyExists = await this.rolesRepository.findByName(name)

    if (roleAlreadyExists) {
      throw new AppError('Role exists, try again role diferent!')
    }

    return this.rolesRepository.create({
      name,
    })
  }
}
