import app from './app'

const startServer = (port: number) => {
	app.listen({ port }, (err, address) => {
		if (err) {
			app.log.error(err)
			process.exit(1)
		}
		app.log.info(`Server listening on port ${address}`) 
	})
}

const PORT =
	process.env.NODE_ENV !== 'development'
		? 8080
		: (process.env.PORT as unknown as number)

startServer(PORT)
