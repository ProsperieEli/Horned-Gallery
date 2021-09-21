
import React, { Component } from 'react'
import Header from './Components/Header.js'
import Images from './Components/Data.js'
import ImageList from './Components/ImageList.js'
export default class App extends Component {
  
  state = {
    keyword: '',
  }
  filterAnimal = (e) => {
    this.setState({keyword: e.target.keyword})
  }
  render() {

    return (
      <div>
        <Header />
        <Images />

      </div>
    )
  }
}
