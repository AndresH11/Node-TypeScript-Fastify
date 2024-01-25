import Fastify from 'fastify'
import { router } from './router'

const app = Fastify({
	logger: !!(process.env.NODE_ENV === 'development'),
})

app.register(router)

export default app
