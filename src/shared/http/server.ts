/* eslint-disable @typescript-eslint/no-unused-vars */
import 'express-async-errors'
import cors from 'cors'
import 'dotenv/config'
import { routes } from '@shared/http/routes'
import { AppError } from '@shared/errors/AppError'
import express, { NextFunction, Request, Response } from 'express'

const app = express()

app.use(express.json())
app.use(cors())
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

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}🚀`)
})
