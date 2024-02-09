import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return("Hi babe!")
})

app.get('/test', () => {
  return("Case two")
})

app.listen({ port:3333 }).then(() => {
  console.log("HTTP server running!")
})