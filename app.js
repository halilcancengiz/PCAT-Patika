const express = require("express")
const mongoose = require("mongoose")
const fileUpload = require('express-fileupload');
var methodOverride = require('method-override')

const ejs = require("ejs")
const photoController = require('./controllers/photoControllers')
const pageController = require('./controllers/pageControllers')



const app = express()
mongoose.connect('mongodb://localhost/pcat-nodejs')


// TEMPLATE ENGINE
app.set('view engine', 'ejs')

// MIDDLEWARE
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(fileUpload())
app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
}))

// ROUTES
app.get("/", photoController.getAllPhotos)
app.get("/photos/:id", photoController.getPhoto)
app.post("/photos", photoController.createPhoto)
app.put("/photos/:id", photoController.updatePhoto)
app.delete('/photos/:id', photoController.deletePhoto)

app.get("/about", pageController.getAboutPage)
app.get("/add", pageController.getAddPage)
app.get("/photos/edit/:id", pageController.getEditPage)



const PORT = 3002
app.listen(PORT, () => {
    console.log(`sunucu ${PORT} portundan başlatıldı`);
})