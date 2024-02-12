import fastify from 'fastify'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'
 
const app = fastify()

const prisma = new PrismaClient()

app.post('/votes', async (request, reply) => {
  const createVoteBody = z.object({
    title: z.string()
  })

 const { title } = createVoteBody.parse(request.body)

  const vote = await prisma.vote.create ({
  data: {
    title,
  }
 })

  return reply.status(201).send({voteId: vote.id})
})


app.listen({ port:3333 }).then(() => {
  console.log("HTTP server running!")
})