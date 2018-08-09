"use strict"; //enable strict mode

//constructor for Weather object
function Weather(cityName, description) //cityName from app.js
{
	this.cityName = cityName;
	this.description = description;
	this._temperature = ''; //this is a private field
	//private fields are not set upon creating object
	//_temperature  will have getters and setters
}


//create a property 'temperature' in the prototype for weather object
Object.defineProperty(Weather.prototype, 'temperature',
{
	get: function()
	{
		return this._temperature;
	},

	set: function(value)
	{
		this._temperature = (value * 1.8 + 32).toFixed(2) + " F";
		//convert celsius to fahrenheit
	}
});