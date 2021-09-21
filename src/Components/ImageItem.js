import React, { Component } from 'react'
export default class ImageItem extends Component {
    render() {
        return (
            <li>
           {this.props.url}
           {this.props.title}
           {this.props.description}
           {this.props.keyword}
           {this.props.horns}
            </li> 
        )}
}
