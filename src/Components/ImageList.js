import React, { Component } from 'react'
import ImageItem from './ImageItem.js'
export default class ImageList extends Component {
    render() {
        return (
          <ul>
                {this.props.images.map(image => {
                return <ImageItem 
                url={image.url} 
                title={image.title}
                description={image.description}
                />})}
                
    
          </ul>
        )
    }
}
