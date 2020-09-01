import {CONVERT_CELSIUS, CONVERT_FAHRENHEIT, CONVERT_KELVIN, RECEIVE_API_DATA, RECEIVE_LOCATION_DATA} from './actions'
import {combineReducers} from "redux";

export const initialState = {
    temperatureUnit:{
        temperature: {
            temp: '50',
            prefix: 'K'
        }
    },
    data: {
        location:{
            ready: false,
            data: ''
        },
        forecast: {
            ready: false,
            data: ''
        }
    }
}

function rootReducer( state = initialState, action){
    switch(action.type){

        case CONVERT_CELSIUS:

            return{
                ...state,
                temperatureUnit: {
                    ...state.temperatureUnit,
                    temperature: {
                        temp: action.temp,
                        prefix: '°C'
                    }
                }
            }

        case CONVERT_KELVIN:

            return{
                ...state,
                temperatureUnit: {
                    ...state.temperatureUnit,
                    temperature: {
                        temp: action.temp,
                        prefix: 'K'
                    }
                }
            }

        case CONVERT_FAHRENHEIT:

            return{
                ...state,
                temperatureUnit: {
                    ...state.temperatureUnit,
                    temperature: {
                        temp: action.temp,
                        prefix: '°F'
                    }
                }
            }

        case RECEIVE_LOCATION_DATA:

            return{
                ...state,
                data:{
                    ...state.data,
                    location: {
                        ready: true,
                        data: action.data

                    }

                }
            }

        case RECEIVE_API_DATA:

            return{
                ...state,
                data:{
                    ...state.data,
                    forecast: {
                            ready: true,
                            data: action.data
                    }
                },
                temperatureUnit: {
                    ...state.data,
                    temperature: {
                        temp: Math.round(action.data.current.temp-273.15),
                        prefix: '°C'
                    }
                }
            }
        default:
            return initialState
    }
}

export const allReducers = combineReducers({
    weather: rootReducer
})