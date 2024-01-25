import { FastifyInstance } from 'fastify'
import { routes } from './helloWorld/routes'

export const router = async (fastify: FastifyInstance) => {
	fastify.register(routes, { prefix: '/hello-world' })
}
