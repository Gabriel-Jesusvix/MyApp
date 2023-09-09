import { Role } from '@roles/entities/Role'

type CreateRoleDTO = {
  name: string
}
export class RoleRepository {
  private roles: Role[] = []
  constructor() {
    this.roles = []
  }

  create({ name }: CreateRoleDTO): Role {
    const role = new Role()

    Object.assign(role, { name, created_at: new Date() }) // merge with existing role

    this.roles.push(role)

    return role
  }

  findaAll(): Role[] {
    return this.roles
  }

  findByName(name: string): Role | undefined {
    return this.roles.find(role => role.name === name)
  }
}