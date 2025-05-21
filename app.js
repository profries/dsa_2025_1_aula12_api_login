const express = require('express')
const produtoRouter = require('./router/produto_router')
const usuarioRouter = require('./router/usuario_router')
const loginController = require('./controller/login_controller')
const loggerMiddleware = require('./middleware/logger_middleware')

const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json

app.use(loggerMiddleware.realizaLog);

app.get('/', async (req, res) => {
  res.send('Hello World!')
})

app.post('/login', loginController.realizarLogin);

app.use('/produtos', produtoRouter);

app.use('/usuarios', usuarioRouter);


app.listen(port, () => {
  console.log(`API running on port ${port}`)
})
