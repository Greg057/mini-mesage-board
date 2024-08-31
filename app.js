const express = require("express")
const app = express()

app.set("views", "./views")
app.set("view engine", "ejs")

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];


app.get("/", (req, res) => {
    res.render("index")
})

app.get("/message", (req, res) => {
    res.render("message")
})

app.listen(8000)