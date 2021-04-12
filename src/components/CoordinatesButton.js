// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    constructor(){
        super()
        this.state = {onRecieveCoordinates: () => {}}

    }
    
createButton = () => {
    const coords = [this.clientX, this.clientY]
    
    onRecieveCoordinates(coords)
}

render (){
    return(
        <button onClick={this.createButton}></button>
    )
}
}