import { z } from "zod"
import { prisma } from "../../lib/prisma"
import { FastifyInstance } from "fastify"

export async function getVote(app: FastifyInstance) {
  app.get('/votes/:voteId', async (request, reply) => {
    const getVoteParams = z.object({
      voteId: z.string().uuid(),
    })

    const { voteId } = getVoteParams.parse(request.params)

    const vote = await prisma.vote.findUnique({
      where: {
        id: voteId,
      },
      include: {
        optionsVote: {
          select: {
            id: true,
            title: true
          }
        }
      }
    })

    return reply.send({ vote })
  })

}