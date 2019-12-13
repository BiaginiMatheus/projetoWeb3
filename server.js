const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const index = require('./routes/index.js');
const app = express();
const porta = process.env.PORT || 3400;

app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://admin:11235813@cluster0-du8af.mongodb.net/chatbot?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,}).then(() => {
    console.log("Conectado, Porta "+porta)
}).catch((err) => {
    console.log("Erro: " + err)
})

app.use("/", index);

http.createServer(app).listen(porta);