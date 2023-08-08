const ApiKey = "54c2e04e77d7cb3360f6a59c5bc5ca70";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
let weatherIcon = document.querySelector(".weather img")
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function showWeather(city){
    
    const response = await fetch(apiUrl+city+`&appid=${ApiKey}`)
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        
    const data =await response.json();
    //  console.log(data)
      document.querySelector(".city").innerHTML=data.name;
      document.querySelector(".temp").innerHTML = data.main.temp + "°C";
      document.querySelector(".percentage").innerHTML = data.main.humidity + "%";
      document.querySelector(".speed").innerHTML= data.wind.speed +"km/hr";
      document.querySelector(".weather").style.display = "block";

      if(data.weather[0].main == "Clear")
       weatherIcon.src = "clear.png";
      else if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "/images/clouds.png";
      } 
      else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
      } 
      else if(data.weather[0].main == "Dizzle"){
        weatherIcon.src = "dizzle.png";
      } 
      else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
      } 
      else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "snow.png";
      } 
      else if(data.weather[0].main =="Fog")
      {
        weatherIcon.src = "fog.jpg"
      }
      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
    }
}
function add(){
    showWeather(searchBox.value)
}
document.querySelector(".search button").addEventListener("click", add)


