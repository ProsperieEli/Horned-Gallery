import React, { Component } from 'react'
export default class ImageItem extends Component {
    render() {
        return (
            <li>
            <img src={this.props.url} alt="" />
           {this.props.title}
           {this.props.description}
           {this.props.keyword}
           {this.props.horns}
            </li> 
        )}
}
