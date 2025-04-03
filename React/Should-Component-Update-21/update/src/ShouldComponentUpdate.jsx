
import React, { Component } from 'react';

class ShouldComponentUpdate extends Component {
    constructor () {
        super();
        this.state ={
            count: 0
        }
    }
    shouldComponentUpdate () {
        console.log("SCU");
        if (this.state.count > 5 && this.state.count < 10) {
             return true;
        }
    }

    render() {
        return (
            <>
                <h2>Should Component update | lifeCycle method</h2>
                <h3>{this.state.count}</h3>
                <button onClick={()=> this.setState({count: this.state.count+1})}>Click</button>
            </>
        );
    }
}

export default ShouldComponentUpdate;