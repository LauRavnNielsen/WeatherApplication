import React, {Component, Fragment} from 'react';
import Weather from './Weather'
import {Footer, Header} from './Layout'
import {getLocationData} from '../Redux/actions'


export default class extends Component{

  componentDidMount() {
    getLocationData()
  }


  render(){
    return <Fragment className={"App"}>
      <Header/>
      <Weather/>
      <Footer/>
    </Fragment>

  }
}
