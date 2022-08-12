const express = require("express")
const path = require("path")

const app = express()

const myLogger = (req, res, next) => {
    console.log("Middleware 1");
    next();
}

const myLogger2 = (req, res, next) => {
    console.log("Middleware 2");
    next();
}

app.use(express.static("public"))
app.use(myLogger)
app.use(myLogger2)

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "temp/index.html"))
})

const PORT = 3002
app.listen(PORT, () => {
    console.log(`sunucu ${PORT} portundan başlatıldı`);
})