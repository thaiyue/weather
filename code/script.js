// Weather assignment JS file

// Keys for API and such
const key = "ca932478b37520b9a4745cabba74cad1"
const url = `http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=${key}`

// Converting Unix-Timestamp to real time.
function Unix_timestamp(t)
{
var dt = new Date(t*1000);
var hr = dt.getHours();
var m = "0" + dt.getMinutes();
var s = "0" + dt.getSeconds();
return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);
}

// Heres where we called all the info from the API
const recievedWeather = (weatherData) => {


  const name=weatherData.name;
  const sunSet=weatherData.sys.sunset;
  const currentWeather= weatherData.weather;
  const mainInfo= weatherData.main;
  const sunRise=weatherData.sys.sunrise;

  // These are the rest of the API calls that are currently not used.
  //
  //
  // const visibility= weatherData.visibility;
  // const wind= weatherData.wind;
  // const clouds= weatherData.clouds;
  // const date= weatherData.dt;
  // const dayInfo= weatherData.sys;
  //
  // These were testing out the javascript syntax.
  // console.log("coordinates:", coordinates)
  // console.log("weather:", currentWeather)
  // console.log("mainInfo:", weatherData)

  const translatedSunset = Unix_timestamp(sunSet);
  const translatedSunrise = Unix_timestamp(sunRise);

  // Creating div for weather information.

document.getElementById("Stockholm").innerHTML +=
`<div class="weather content">
 <h2> Welcome to ${name}!</h2>
 <p> The temperature is ${(mainInfo.temp.toFixed(1))} C. </p>
 <p> It is currently ${currentWeather[0].description}.</p>
 <p> Today's sunrise is at ${translatedSunrise}. </p>
 <p> Today's sunset is at ${translatedSunset}.</p>
</div>`

}





// Stop trying to make fetch happen
fetch(url)
  .then(response => response.json())
  .then(recievedWeather)
