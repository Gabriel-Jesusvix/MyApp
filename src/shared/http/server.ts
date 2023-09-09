import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import 'dotenv/config'

const app = express()

app.use(express.json())
app.use(cors())
app.get('/', (request, response) => {
  return response.json({ message: 'Olá' })
})

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}🚀`)
})
