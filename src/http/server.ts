import fastify from 'fastify'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'
import { createVote } from './routes/createVote'
import { getVote } from './routes/getVote'

const app = fastify()

app.register(createVote)
app.register(getVote)

app.listen({ port:3333 }).then(() => {
  console.log("HTTP server running!")
})