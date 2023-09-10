import { Role } from '@roles/entities/Role'
import { dataSource } from '@shared/typeorm/'
import { Repository } from 'typeorm'

type CreateRoleDTO = {
  name: string
}

export type PaginateParams = {
  page: number
  skip: number
  take: number
}

export type RolesPaginateProperties = {
  per_page: number
  total: number
  current: number
  data: Role[]
}
export class RoleRepository {
  private repository: Repository<Role>
  private static INSTANCE: RoleRepository

  private constructor() {
    this.repository = dataSource.getRepository(Role)
  }
  public static getInstance(): RoleRepository {
    // Verify instance of class exists
    if (!RoleRepository.INSTANCE) {
      RoleRepository.INSTANCE = new RoleRepository()
    }

    return RoleRepository.INSTANCE
  }

  async create({ name }: CreateRoleDTO): Promise<Role> {
    const role = this.repository.create({
      name,
    })

    return this.repository.save(role)
  }

  async save(role: Role): Promise<Role> {
    return this.repository.save(role)
  }

  async delete(role: Role): Promise<void> {
    await this.repository.remove(role)
  }
  findByName(name: string): Promise<Role | null> {
    return this.repository.findOneBy({
      name,
    })
  }

  async findById(id: string): Promise<Role | null> {
    return this.repository.findOneBy({
      id,
    })
  }
  async findaAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<RolesPaginateProperties> {
    const [roles, count] = await this.repository
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount()

    const result = {
      per_page: take,
      total: count,
      current: page,
      data: roles,
    }

    return result
  }
}
