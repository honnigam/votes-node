import { z } from "zod"
import { prisma } from "../../lib/prisma"
import { FastifyInstance } from "fastify"


export async function createVote (app: FastifyInstance) {
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
}