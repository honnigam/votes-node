import fastify from 'fastify'
import { z } from 'zod'

const app = fastify()

app.post('/votes', (request) => {
  console.log(request.body)
  return 'hello mundo'
})


app.listen({ port:3333 }).then(() => {
  console.log("HTTP server running!")
})