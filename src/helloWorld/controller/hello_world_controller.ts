import { FastifyReply, FastifyRequest } from 'fastify'

export const helloWorld = async (_req: FastifyRequest, res: FastifyReply) => {
	try {
		res.code(200).send('Hello, world')
	} catch (error) {
		res.code(500).send(error)
	}
}
