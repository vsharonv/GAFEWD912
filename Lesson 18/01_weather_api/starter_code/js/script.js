
// ToDo
// When the user submits the search form, make an API request to open weather api's search endpoint
// https://api.openweathermap.org/data/2.5/weather?q=CITY&APPID=KEY
// Icon URL - refer to docs on how to use
// https://openweathermap.org/img/wn/####@2x.png  - replace #### with icon code
// Display the results in the #weather-results div
// Each new search should erase the previous results

const myApiKey = "54aa3b2b1161363f47efcc92b9e780c8";

async function handleWeatherRequest(e) {
  e.preventDefault();

  // get user input value from textbox
  const city = document.querySelector('input[name="city"]').value;
  
  // build the url address with YOUR personal API key and the users input city
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${myApiKey}`;

  const apiUrlAlternative = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + myApiKey;
  
  // make an API call using fetch() and capture the response in a variable

  const response = await fetch(apiUrl);
 
  // convert the response to a readable json format with .json()

  const convert = await response.json();
  
  // print your data to the console to see its format, dont forget to delete later

  
  // Write a separate function to convert the temps from the default units (Kelvin) to a more readable F or C

  const currentTemp = convertKtoF(convert.main.temp);
  const feelsLikeTemp = convertKtoF(convert.main.feels_like);
  const humidity = convert.main.humidity;
  const pressure = numberWithCommas(convert.main.pressure);
  const highTemp = convertKtoF(convert.main.temp_max);
  const lowTemp = convertKtoF(convert.main.temp_min);

  const weatherResults = 
  `<li>The temperature in ${city} is currently ${currentTemp}&#8457 </li>
  <li>Feels Like: ${feelsLikeTemp}&#8457 </li>
  <li>Humidity: ${humidity}% </li>
  <li>Pressure: ${pressure} </li>
  <li>High: ${highTemp}&#8457 </li>
  <li>Low: ${lowTemp }&#8457 </li>`;

  // add , to thousands function

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  // build the icon src

  const iconSrc = `https://openweathermap.org/img/wn/${convert.weather[0].icon}@2x.png`;
  
  // create icon img tag
  const newWeatherIconTag = document.createElement("img");
  
  // add icon url as src

  newWeatherIconTag.setAttribute("src", iconSrc);

  // clear out previous icon img
  document.querySelector("#weather-icon").innerHTML = ""

  // print all results to dom
  document.querySelector("#weather-results").innerHTML = weatherResults;

  
  // append icon img to dom
  document.querySelector("#weather-icon").appendChild(newWeatherIconTag);
}

function convertKtoF(kelvinTemp){
  let convertedTemp = (kelvinTemp - 273) * 1.8 + 32;
  // Round
  convertedTemp = Math.round(convertedTemp);

  return convertedTemp;
}

// Attach an event listener to the submit button
document.querySelector('#weather-search').addEventListener('submit',handleWeatherRequest);