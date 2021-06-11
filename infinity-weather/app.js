function webWidth (){
    if (screen.availWidth < 320) {
        alert("This website may not work properly with the amount of scrren space your device has")
    }
}


webWidth();

 var input = document.getElementById("addCityText");
  input.addEventListener("keyup", function(event) {
  event.preventDefault();
   if (event.key === 'Enter') {
       document.getElementById("Submit-button").click();
   }
 });

var cityName = "Louisville"
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var weather = JSON.parse(this.responseText);
    var weatherTemp = weather.main;
    console.log(weatherTemp);
    var floatTemp = weatherTemp.temp
    var trimmedTemp = parseInt(floatTemp)
    var feelLike = parseInt(weatherTemp.feels_like)
    var minTemp = parseInt(weatherTemp.temp_min)
    var maxTemp = parseInt(weatherTemp.temp_max)
    document.getElementById("feels_like").innerHTML = "Feels Like: " + feelLike + "°C"
    document.getElementById("min_temp").innerHTML = "Min: " + minTemp + "°C"
    document.getElementById("max_temp").innerHTML = "Max: " + maxTemp + "°C"
    var uiCityName = weather.name
    console.log(uiCityName)
    var countryName = weather.sys
    document.getElementById("location_country").innerHTML = countryName.country
    document.getElementById("current_temp").innerHTML = trimmedTemp + "°C";
  }
};
xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=ae57b07a14d0843eb4fa4e214552bc52&&units=metric", true);
xmlhttp.send()  ;


function newCity() {
  cityName = document.getElementById("addCityText").value;
  console.log(cityName)
  
  document.getElementById("current_temp").style.fontSize = "130px"
  //NewCity Callback
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var weather = JSON.parse(this.responseText);
    var weatherTemp = weather.main;
    console.log(weatherTemp);
    var trimmedTemp = parseInt(weatherTemp.temp)
    var feelLike = parseInt(weatherTemp.feels_like)
    var minTemp = parseInt(weatherTemp.temp_min)
    var maxTemp = parseInt(weatherTemp.temp_max)
    var uiCityName = weather.name
    console.log(uiCityName)
    var countryName = weather.sys
    document.getElementById("location_country").innerHTML = countryName.country
    var sky = weather.weather
    //document.getElementById("sky").innerHTML = "The sky is " + sky.main
    console.log(sky)
    document.getElementById("feels_like").innerHTML = "Feels Like: " + feelLike + "°C"
    document.getElementById("min_temp").innerHTML = "Min: " + minTemp + "°C"
    document.getElementById("max_temp").innerHTML = "Max: " + maxTemp + "°C"
    document.getElementById("location_city").innerHTML = uiCityName
    document.getElementById("current_temp").innerHTML = trimmedTemp + "°C";
      } else if (this.status == 404){
      document.getElementById("current_temp").innerHTML = "Error while loading weather information" 
      document.getElementById("current_temp").style.fontSize = "30px" 
      document.getElementById("other_info").style.display = "none"
    }
  };
  xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=ae57b07a14d0843eb4fa4e214552bc52&&units=metric", true);
  xmlhttp.send();

}