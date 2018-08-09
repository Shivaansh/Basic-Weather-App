"use strict"; //enable strict mode

searchButton.addEventListener('click', getWeather);
//this listener executed 'getWeather'
//when the button is clicked

function getWeather()
{
	var cityName = city.value; //city imported from init
	//value is a property on input HTML element

	if(cityName.trim().length == 0)//if name entered is blank
	{
		return alert("City name cannot be blank!");
		//open alert dialog box prompting for city name
	}
	var http = new XMLHttpRequest();
	//create HTTP request, but not sent

	var keyAPI = 'ebedf5392f5d474fe6e644718e45446e';
	//API key to use with API calls

	var linkToSendReqTo = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName;
	//link to send HTTP request to

	var method = "GET";
	//method type: GET for retrieving data

	http.open(method, linkToSendReqTo);
	//open request

	http onreadystatechange = function() //this does NOT send the request
	{
		if(http.readyState === XMLHttpRequest.DONE && http.status === 200) //successful return
		{
		//success, reflect data as Weather object
		}
		else if(http.readyState === XMLHttpRequest.DONE && http.status !== 200) //failed return
		{
		//error, display error message
		return alert("Sorry, something went wrong :(");
		}
	}
}

//weather service used: openweathermap.org API
//API key: ebedf5392f5d474fe6e644718e45446e
//key needs to be appended to API calls
//link to send request to: api.openweathermap.org/data/2.5/weather?q={city name}