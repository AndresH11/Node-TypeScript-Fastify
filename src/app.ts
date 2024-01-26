import Fastify from 'fastify'
import { router } from './router'

const app = Fastify({
	logger: true,
})

app.register(router)

export default app
