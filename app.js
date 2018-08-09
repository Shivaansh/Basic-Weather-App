"use strict"; //enable strict mode

searchButton.addEventListener('click', getWeather);
//this listener executed 'getWeather'
//when the button is clicked

function getWeather()
{
	console.log(city.value); //city imported from init
	//value is a property on input HTML element
}

//weather service used: openweathermap.org API
//API key: ebedf5392f5d474fe6e644718e45446e
//key needs to be appended to API calls