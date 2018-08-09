"use strict"; //enable strict mode
//this file retrieves loads all required elements
//from the DOM for use by other scripts.
//it should be loaded into the HTML file BEFORE 
//the file that uses these elements


var searchButton = document.querySelector('button');
//retrieve button from window by tag

var city = document.querySelector('#city'); //because input tag has city ID
//stores user input (name of city)