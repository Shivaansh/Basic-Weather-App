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

	var linkToSendReqTo = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + keyAPI;
	//get data in metric units (Celsius)
	//link to send HTTP request to (REMMEBER adding http://)

	var method = "GET";
	//method type: GET for retrieving data

	http.open(method, linkToSendReqTo);
	//open request

	http.onreadystatechange = function() //this does NOT send the request
	{
		if(http.readyState === XMLHttpRequest.DONE && http.status === 200) //successful return
		{
		//success, reflect data as Weather object
			var data = JSON.parse(http.responseText); //parse response to object
			//data variable is used to declare the weather object

			//look at API response sample to know how this part works
			var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
			weatherData.temperature = data.main.temp;
			console.log(weatherData);
		}
		else if(http.readyState === XMLHttpRequest.DONE && http.status !== 200) //failed return
		{
		//error, display error message
		return alert("Sorry, something went wrong :(");
		}
	};

	http.send(); //send request
}

//weather service used: openweathermap.org API
//API key: ebedf5392f5d474fe6e644718e45446e
//key needs to be appended to API calls
//link to send request to: http://api.openweathermap.org/data/2.5/weather?q={city name}


//API response sample
/*
{"coord":{"lon":139,"lat":35},
"sys":{"country":"JP","sunrise":1369769524,"sunset":1369821049},
"weather":[{"id":804,"main":"clouds","description":"overcast clouds","icon":"04n"}],
"main":{"temp":289.5,"humidity":89,"pressure":1013,"temp_min":287.04,"temp_max":292.04},
"wind":{"speed":7.31,"deg":187.002},
"rain":{"3h":0},
"clouds":{"all":92},
"dt":1369824698,
"id":1851632,
"name":"Shuzenji",
"cod":200}
*/