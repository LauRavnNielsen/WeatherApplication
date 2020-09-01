import React from 'react';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {convertCelsius, convertFahrenheit, convertKelvin} from "../../Redux/actions";
import {connect} from "react-redux";
import store from "../../Redux/store";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";




class WeatherForecast extends React.Component{
    render(){

    if (!this.props.weather.data.forecast.ready){
      return null
    }

    const data = this.props.weather
    const icon = data.data.forecast.data.current.weather[0].icon
    const weatherDescription = data.data.forecast.data.current.weather[0].description
    let temperature = data.temperatureUnit.temperature.temp
    let temperaturePrefix = data.temperatureUnit.temperature.prefix
    const uvi = data.data.forecast.data.current.uvi
    const windspeed = data.data.forecast.data.current.wind_speed
    const humidity = data.data.forecast.data.current.humidity
    const temp = data.data.forecast.data.current.temp

    return(
        <div align={'center'}>

            <div className={'TemperatureConversion'}>
              <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button onClick={() => {store.dispatch(convertCelsius(temp))}}>Celsius</Button>
                <Button onClick={() => {store.dispatch(convertFahrenheit(temp))}}>Fahrenheit</Button>
                <Button onClick={() => {store.dispatch(convertKelvin(temp))}}>Kelvin</Button>
              </ButtonGroup>
            </div>

            <Card className={"forecast"}>
                  <CardMedia
                    className={"Icon holder"}
                    component={"img"}
                    image={require(`./Icons/${icon}.png`)}
                    style={{width: "100px"}}
                  />
                  <div>
                    <p>{"Weather Description: " + weatherDescription}</p>
                    <p>{"Outside Temperature: " + temperature +"  "+ temperaturePrefix}</p>
                    <p>{"UV Index: " + uvi}</p>
                    <p>{"Wind speed: " + windspeed + "  m/s"}</p>
                    <p>{"Humidity: " + humidity + "  %"}</p>
                  </div>
            </Card>
        </div>
    );}
}

const mapStateToProps = (state) =>{
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(WeatherForecast);