import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'
import { createVote } from './routes/createVote'
import { getVote } from './routes/getVote'
import { votePoll } from './routes/votePoll'


const app = fastify()

//create a single user subscription 
app.register(cookie, {
  secret: "vote-app",
  hook: 'onRequest',
})

app.register(createVote)
app.register(getVote)
app.register(votePoll)


app.listen ({port:3333 }).then(() => {
  console.log("HTTP server running!")
})