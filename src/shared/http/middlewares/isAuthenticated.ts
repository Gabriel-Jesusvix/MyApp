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
    return response.status(401).json({
      error: true,
      code: 'token.invalid',
      message: 'Access token not present',
    })
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
    return response.status(401).json({
      error: true,
      code: 'token.expired',
      message: 'Access token not present',
    })
  }
}
