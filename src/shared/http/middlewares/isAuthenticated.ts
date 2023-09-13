import { AppError } from '@shared/errors/AppError'
import { NextFunction, Request, Response } from 'express'
import { Secret, verify } from 'jsonwebtoken'
import authConfig from '@config/auth'

type JwtPayload = {
  sub: string
}
export const isAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('Failed to get authorization', 401)
  }
  const token = authHeader.replace('Bearer', '')
  try {
    const decodedToken = verify(token, authConfig.jwt.secret as Secret)
    const { sub } = decodedToken as JwtPayload
    request.user = {
      id: sub,
    }
    return next()
  } catch (error) {
    throw new AppError('Invalid authorization', 401)
  }
}
