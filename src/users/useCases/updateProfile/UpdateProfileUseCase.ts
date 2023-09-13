import { inject, injectable } from 'tsyringe'
import { compare, hash } from 'bcryptjs'
import { IRolesRepository } from '@roles/repositories/IRolesRepository'
import { AppError } from '@shared/errors/AppError'
import { User } from '@users/entities/User'
import { IUsersRepository } from '@users/repositories/IUsersRepository'

type UpdateProfileUseCaseDTO = {
  userId: string
  name: string
  email: string
  password?: string
  old_password?: string
}

@injectable()
export class UpdateProfileUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
    @inject('RolesRepository') private rolesRepository: IRolesRepository,
  ) {}

  async execute({
    userId,
    name,
    email,
    password,
    old_password,
  }: UpdateProfileUseCaseDTO): Promise<User> {
    const user = await this.usersRepository.findById(userId)
    const userUpdateEmailExists = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('User not found', 404)
    }

    if (userUpdateEmailExists && userUpdateEmailExists.id !== userId) {
      throw new AppError('There is already on user with this email')
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)
      if (!checkOldPassword) {
        throw new AppError('Old password does not match')
      }
      user.password = await hash(password, 8)
    }
    user.name = name
    user.email = email
    return this.usersRepository.save(user)
  }
}
