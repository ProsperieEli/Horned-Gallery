
import React, { Component } from 'react'
import Header from './Components/Header.js'
import ImageList from './Components/ImageList.js'
import images from './Components/Data.js'
import './App.css'
import Dropdown from './Components/Dropdown.js'
export default class App extends Component {
  
  state = {
    keyword: '',
    horns: ''
  }
  filterAnimal = (e) => {
    /* e.target.value is special, always e.target.value */
    this.setState({keyword: e.target.value})
  }

  hornedAnimal = (e) => {
    this.setState({horns: Number(e.target.value)})
  }
  render() {
    const filterAnimal = images.filter((animal) => {
      if(!this.state.keyword){
        return true;
      } else
      {
       return animal.keyword === this.state.keyword
      }
    }).filter((horned) => {
      if(!this.state.horns){
        return true;
      } else
      {
       return horned.horns === this.state.horns
      }
    }) 





    return (
      <div>
        <Header />
        <Dropdown filterChange={this.hornedAnimal} options={[1, 2, 3, 100]} />
        <Dropdown filterChange={this.filterAnimal} options={["narwhal", "rhino", "unicorn", "unilego", "triceratops", "markhor", "mouflon","addax", "chameleon", "lizard", "dragon"]} />
        <ImageList images={filterAnimal} />
      </div>
    )
  }
}
