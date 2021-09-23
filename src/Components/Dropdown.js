import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            
        <select className="header" onChange={this.props.filterChange}>
                <option value="">All</option>
                {this.props.options.map(option => {
                    return <option 
                    value= {option}>{option}</option>
                })}
       </select>
           
        )
    }
}


{/* <option value="">All</option>
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
<option value="dragon">Dragon</option> */}