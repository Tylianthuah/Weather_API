const express = require("express");
const apiKey = require("../apiKey");
const router = express.Router();
const path = require("path")



router.get("/", (req,res) => {
    res.sendFile(path.dirname(__dirname) + "/index.html");
})


router.post("/", (req,res) => {
    const query = req.body.cityName
    const metric = "metric"
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${apiKey}&units=${metric}`;
    
    https.get( weatherUrl , (response) => {

        response.on("data" , (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const tempdesc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon
            const iconImage = `http://openweathermap.org/img/wn/${icon}@2x.png`;

            res.write(`<h1>The Weather in ${query} is ${temp} degree celcius.</h1>`);
            res.write(`<p>The weather description is ${tempdesc}</p>`)
            res.write(`<img src="${iconImage}">`)
            res.send();
        })
    })
})


module.exports = router;