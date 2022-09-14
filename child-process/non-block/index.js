const express = require('express')
const { fork } = require('child_process')

const app = express()

app.get('/is-prime',(req, res) => {
    let childProcess = fork('./task.js')
    childProcess.send(parseInt(req.query.number))
    childProcess.on('message', (data) => {
        res.send(data)
    })
    childProcess.on('exit', (code, signal) => console.log(`exited with ${code}`))
})

app.listen(3040, () => console.log(`server running on http://localhost:3040`))

