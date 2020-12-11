const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const chalk = require('chalk'); // Fancy console formatting

// Configs
const PORT = 8080

// Global messages variable (wipes after server restart)
var messages = ""

// Application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get("/", (req, res) => {
    res.send(messages)
})

// Bot status endpoint
app.post("/api/discord/botstatus", urlencodedParser, (req, res) => {
    console.log(chalk.hex("#696969")(`Bot status: `) + chalk.hex("#3DFF8B")(`${req.body.bot_status}`))
    res.send("Data received.")
})

// Message endpoint
app.post("/api/discord/message", urlencodedParser, (req, res) => {
    const {author, content} = req.body
    console.log(chalk.hex("#6CE8EB")(`${author}: `) + `${content}`)
    messages += (`<p>${author}: ${content}</p>`)
    res.send("Data received.")
})

// Server is listening on PORT
app.listen(PORT, ()=>{console.log(chalk.hex("#3DFF8B")(`Server started on port ${PORT}`))})