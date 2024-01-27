import 'dotenv/config'
import express from 'express'

import router from './routes/index.js'

const app = express()

app.set('trust proxy', 1)
app.use(express.json())

app.use('/api', router)

app.all('*', (req, res) => res.status(404).send({}))

app.listen(3000, console.log('server is running on port 3000'))
