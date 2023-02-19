document.querySelector('#convert').addEventListener('click', convert)

function convert() {

// Defined the value for Kelvin
let celsius = document.querySelector('#degrees').value
// Defined the value of Celsius
let kelvin = celsius + 273
// Defined the value of Newton
let newton = celsius * (33/100)
// Defined the value of Farenheit
let fahrenheit = celsius * (9/5) + 32

// Round down the Kelvin value
kelvin = Math.floor(celsius + 273)

// Round down the Newton value
newton = Math.floor(celsius * (33/100))

// Round down the Farenheit value
fahrenheit = Math.floor(celsius * (9/5) + 32)

document.querySelector('#temperatureInKelvin').innerText = `The temperature is ${kelvin} degrees in Kelvin`;
document.querySelector('#temperatureInNewton').innerText = `The temperature is ${newton} degrees in Newton`;
document.querySelector('#temperatureInFahrenheit').innerText = `The temperature is ${fahrenheit} degrees in Fahrenheit`;
}