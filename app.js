const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const homeRouter = require('./routers/homeRouter')
const port = process.env.port || 8080;
const app = express();

const uri = `mongodb+srv://Rahul11:cgCOCgp6WQ3VU4Ry@cluster0.m1b6l.mongodb.net/?retryWrites=true&w=majority`
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("mongodb connected sucessfully"))
    .catch(err => console.log(err))

app.set('view engine', 'ejs')
app.use(express.static('public'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use('/', homeRouter)
app.listen(port)