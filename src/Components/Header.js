import React, { Component } from 'react'

export default class Header extends Component {
    
    render() {
        return (
            <div>
                <p>Welcome to mystical animals!</p>
       <select className="header">
           <option value="With Horns">With horns</option>
           <option value="hornless">hornless</option>
           
       </select>
       </div>
        )
    }
}
