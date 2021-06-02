function webWidth (){
    if (screen.availWidth < 320) {
        alert("This website may not work properly with the amount of scrren space your device has")
    }
}


webWidth();

var cityName = "Louisville"
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var weather = JSON.parse(this.responseText);
    var weatherTemp = weather.main;
    console.log(weatherTemp);
    var floatTemp = weatherTemp.temp
    var trimmedTemp = parseInt(floatTemp)
    document.getElementById("current_temp").innerHTML = trimmedTemp + "°C";
  }
};
xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=ae57b07a14d0843eb4fa4e214552bc52&&units=metric", true);
xmlhttp.send()  ;


function newCity() {
  cityName = document.getElementById("addCityText").value;
  console.log(cityName)
  document.getElementById("location_city").innerHTML = cityName
  document.getElementById("current_temp").style.fontSize = "130px"
  //NewCity Callback
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var weather = JSON.parse(this.responseText);
    var weatherTemp = weather.main;
    console.log(weatherTemp);
    var floatTemp = weatherTemp.temp
    var trimmedTemp = parseInt(floatTemp)
    document.getElementById("current_temp").innerHTML = trimmedTemp + "°C";
      } else if (this.status == 404){
      document.getElementById("current_temp").innerHTML = "Error while loading weather information" 
      document.getElementById("current_temp").style.fontSize = "30px" }
  };
  xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=ae57b07a14d0843eb4fa4e214552bc52&&units=metric", true);
  xmlhttp.send();

}