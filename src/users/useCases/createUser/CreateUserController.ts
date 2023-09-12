import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateUserUseCase } from './CreateUserUseCase'
import { instanceToInstance } from 'class-transformer'

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserUserCase = container.resolve(CreateUserUseCase)

    const { name, email, password, isAdmin, roleId } = request.body
    const user = await createUserUserCase.execute({
      name,
      email,
      password,
      isAdmin,
      roleId,
    })

    return response.status(201).json(instanceToInstance(user))
  }
}
