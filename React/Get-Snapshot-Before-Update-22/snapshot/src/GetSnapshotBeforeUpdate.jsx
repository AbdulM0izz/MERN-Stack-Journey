import React, { Component } from 'react';

class GetSnapshotBeforeUpdate extends Component {
   
    constructor () {
        super ();
        this.state ={
            count: 0
        }
    }
    componentDidUpdate (prevstate, prevprop, snapShot) {
        console.log("hello" , snapShot);
    }
    getSnapshotBeforeUpdate (prevState) {
        console.log("hello" , prevState);
        return prevState
    }

    render() {
        return (
            <>
              <h2>Get Snapshot befoe update | lifecycle method</h2>  
              <h2>Hello,{this.state.count}</h2>
              <button onClick={()=> this.setState({count: this.state.count+1})}>Update</button>
            </>
        );
    }
}

export default GetSnapshotBeforeUpdate;