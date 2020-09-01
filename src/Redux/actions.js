import store from "./store"

export var RECEIVE_API_DATA = "RECEIVE_API_DATA"
export var RECEIVE_LOCATION_DATA = "RECEIVE_LOCATION_DATA"
export var CONVERT_KELVIN = "CONVERT_KELVIN"
export var CONVERT_FAHRENHEIT = "CONVERT_FAHRENHEIT"
export var CONVERT_CELSIUS = "CONVERT_CELSIUS"



const API_KEY = '2aa13f45f3db93e531a2f59c21c5e284'

export function convertKelvin(temp) {
    return {
        type: CONVERT_KELVIN,
        temp: temp
    }
}

export function convertCelsius(temp) {
    const temperature = Math.round(temp-273.15)
    return {
        type: CONVERT_CELSIUS,
        temp: temperature
    }
}

export function convertFahrenheit(temp) {
    return {
        type: CONVERT_FAHRENHEIT,
        temp: Math.round((temp - 273.15) * (9/5) + 32)
    }
}

export function getLocationData() {

    if (window.navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const locationData = {
                lat: position.coords.latitude,
                long: position.coords.longitude
            }
            store.dispatch(receiveLocationData(locationData))
            fetchData(locationData)
        })
    }
}

function receiveLocationData(locationData){
    return {
        type: RECEIVE_LOCATION_DATA,
        data: locationData
    }
}

function receiveWeatherData(data){
    return{
        type: RECEIVE_API_DATA,
        data: data
    }
}

export function fetchData(locationData) {
    let lat = locationData.lat
    let long = locationData.long

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={'minutely,hourly,daily'}&appid=${API_KEY}`)
            .then(response => response
                .json()).then(weatherData => {
            store.dispatch(receiveWeatherData(weatherData))
        })


}




