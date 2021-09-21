
import React, { Component } from 'react'
import Header from './Components/Header.js'
import ImageList from './Components/ImageList.js'
import images from './Components/Data.js'
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
        <select className="header" onChange={this.filterAnimal}>
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
        <ImageList images={images} />
      </div>
    )
  }
}
