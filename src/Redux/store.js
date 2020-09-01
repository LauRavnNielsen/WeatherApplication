import {applyMiddleware, createStore} from '@reduxjs/toolkit'
import {allReducers} from './reducers'
import thunk from "redux-thunk";



const store = createStore(allReducers, applyMiddleware(thunk))

export default store