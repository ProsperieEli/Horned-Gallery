
import React, { Component } from 'react'
import Header from './Components/Header.js'
import ImageList from './Components/ImageList.js'
import images from './Components/Data.js'
import './App.css'
export default class App extends Component {
  
  state = {
    keyword: '',
  }
  filterAnimal = (e) => {
    /* e.target.value is special, always e.target.value */
    this.setState({keyword: e.target.value})
  }
  render() {
    const filterAnimal = images.filter((horned) => {
      if(!this.state.keyword){
        return true;
      } else
      {
       return horned.keyword === this.state.keyword
      }
    }) 
    console.log(filterAnimal);
    return (
      <div>
        <Header />
        <select className="header" onChange={this.filterAnimal}>
          <option value="">All</option>
           <option value="narwhal">Narwhal</option>
           <option value="rhino">Rhino</option>
           <option value="unicorn">Unicorn</option>
           <option value="unilego">Unilego</option>
           <option value="triceratops">Triceratops</option>
           <option value="markhor">Markhor</option>
           <option value="mouflon">Mouflon</option>
           <option value="addax">Addax</option>
           <option value="chamelon">Chameleon</option>
           <option value="lizard">Lizard</option>
           <option value="dragon">Dragon</option>
       </select>
        <ImageList images={filterAnimal} />
      </div>
    )
  }
}
