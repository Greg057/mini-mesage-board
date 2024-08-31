const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/indexRouter")

app.use("/", indexRouter);

app.set("views", "./views")
app.set("view engine", "ejs")


app.listen(8000)