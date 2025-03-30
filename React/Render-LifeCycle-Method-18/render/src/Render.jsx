import React, { Component } from 'react';
import { useState } from 'react';

class Render extends Component {
    constructor () {
        super();

        this.state = {
            name: "Moiz"
        }
    }
    render() { 
        // console.log("Render call",this.state);
        return (
            <>
                <h2>Render LifeCycle Method</h2>
                <h2>{this.state.name}</h2>
                <h3>{this.props.color}</h3>
                <br />
                <br />
                <button onClick={()=> this.setState({name: "Ali"})}>Change Name</button>

    
            </>
        );
    }
}

export default Render;
