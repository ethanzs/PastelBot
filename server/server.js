const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Configs
const PORT = 8080

// Application/json parser
var jsonParser = bodyParser.json()

// Application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get("/", (req, res) => {
    res.send("Endpoint works")
})

// Bot status endpoint
app.post("/api/discord/botstatus", urlencodedParser, (req, res) => {
    console.log(req.body)
    res.send("Data received.")
})

// Message endpoint
app.post("/api/discord/message", urlencodedParser, (req, res) => {
    const {author, content} = req.body
    console.log(`${author}: ${content}`)
    res.send("Data received.")
})

// Server is listening on PORT
app.listen(PORT, ()=>{console.log(`Server started on port ${PORT}`)})