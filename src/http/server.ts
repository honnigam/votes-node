import fastify from 'fastify'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'
import { createVote } from './routes/createVote'

const app = fastify()

app.register(createVote)

app.listen({ port:3333 }).then(() => {
  console.log("HTTP server running!")
})