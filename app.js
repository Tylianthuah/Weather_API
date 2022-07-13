const { response } = require("express");
const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
const api = require("./apiKey")

app.use(bodyParser.urlencoded({extended: true}));

app.use("/" , require("./router/weather"))

const PORT = process.env.PORT || 3000;
app.listen(3000 , () => {
    console.log("Server has started......")
})