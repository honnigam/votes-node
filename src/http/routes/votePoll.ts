import { z } from "zod"
import { prisma } from "../../lib/prisma"
import { FastifyInstance } from "fastify"
import { randomUUID } from "node:crypto"

export async function votePoll(app: FastifyInstance) {
  app.post('/votes/:voteId/vote', async (request, reply) => {
    const votePollBody = z.object({
      voteOptionId: z.string().uuid()
    })

    const votePollParams = z.object({
      voteId: z.string().uuid(),  
    })

    const { voteId } = votePollParams.parse(request.params)
    const { voteOptionId } = votePollBody.parse(request.body)


    //validate the vote once 
    const userSessionId = randomUUID()

    reply.setCookie('sessionUserId', userSessionId, {
      path: '/', 
      maxAge: 60 * 60 * 24 * 30,
      signed: true,
      httpOnly: true,
    })

    return reply.status(201).send()
  })

}