import fastify from 'fastify'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'
import { createVote } from './routes/createVote'
import { getVote } from './routes/getVote'
import { votePoll } from './routes/votePoll'

const app = fastify()

app.register(createVote)
app.register(getVote)
app.register(votePoll)


app.listen ({port:3333 }).then(() => {
  console.log("HTTP server running!")
})