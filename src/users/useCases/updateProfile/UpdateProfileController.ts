import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateProfileUseCase } from './UpdateProfileUseCase'
import { instanceToInstance } from 'class-transformer'

export class UpdateProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateProfileUserCase = container.resolve(UpdateProfileUseCase)
    const userId = request.user.id
    const { name, email, password, old_password } = request.body
    const user = await updateProfileUserCase.execute({
      userId,
      name,
      email,
      password,
      old_password,
    })

    return response.json(instanceToInstance(user))
  }
}
