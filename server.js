const express = require("express");
const https = require("https")

const app = express();

app.get("/", function(req, res){
        
          const url="https://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric&appid=e6f393fb5650c5762870e285dc637428"
          https.get(url , function(response){
          console.log(response.statusCode);
          
          response.on("data" , function(data){
               const weatherData = JSON.parse(data);
               console.log(weatherData);
               const temp = weatherData.main.temp;
               console.log(temp);
               const weatherDescription = weatherData.weather[0].description;
               console.log(weatherDescription);
          });
          });
    
    res.send("app is up and running");
});






app.listen(5500, function(){
     console.log("port running at 5550");
});