import 'reflect-metadata'
import 'dotenv/config'
import { app } from './app'
import { dataSource } from '@shared/typeorm'

dataSource
  .initialize()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}🚀`)
    })
  })
  .catch(error => {
    console.error('Error during Data Source initialization', error)
  })
