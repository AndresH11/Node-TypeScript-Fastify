import { helloWorld } from './controller/hello_world_controller'
import { FastifyInstance } from 'fastify'

export const routes = async (fastify: FastifyInstance) => {
	fastify.get('/hola', helloWorld)
}
