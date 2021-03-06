module.exports = {
  install: function ({ db, logger }) {
    this.db = db
    this.logger = logger

    const router = require('express').Router()

    const questionsRouter = require('./routes/questionsRouter')
    const sessionsRouter = require('./routes/sessionsRouter')
    const activeSessionsRouter = require('./routes/activeSessionsRouter')

    const cors = require('cors')

    router.use(
      cors({
        origin: /.*/g,
        optionsSuccessStatus: 200,
        credentials: true
      })
    )

    router.get('/', (req, res, next) => {
      res.json({ message: 'Hello, world!' })
    })

    router.use('/questions', questionsRouter)
    router.use('/sessions', sessionsRouter)
    router.use('/active', activeSessionsRouter)

    this.logger.debug('wouso-treasure-hunt installed!')

    return router
  },
  uninstall: function () {
    this.logger.debug('wouso-treasure-hunt uninstalled!')
  }
}
