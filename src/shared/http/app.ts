/* eslint-disable @typescript-eslint/no-unused-vars */

import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'
import { routes } from '@shared/http/routes'
import { AppError } from '@shared/errors/AppError'
import express, { NextFunction, Request, Response } from 'express'
import swaggerFile from '../../swagger.json'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(routes)

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      })
    }
    console.log(error)
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    })
  },
)

export { app }
