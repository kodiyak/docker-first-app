import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({
    message: 'Testing the CapRover!'
  })
})

app.listen(port, () => {
  console.log(`App running in port ${port}`)
})
