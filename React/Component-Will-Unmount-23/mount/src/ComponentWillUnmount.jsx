import React, { Component } from 'react'
import Fortoggle from './Fortoggle'

class ComponentWillUnmount extends Component {
    constructor () {
        super ();
        this.state = {
            show : true
        }
    }

    render () {
        return (
            <>
              <h2>Component will unmount | lifeCycle method </h2>

              <button onClick={() => this.setState({show: !this.state.show})}>Toggle</button>
              
              {this.state.show ?  <Fortoggle /> : <h3>Component removed</h3>}
             
            </>
        )
    }
}
export default ComponentWillUnmount