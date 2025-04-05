
import React, { Component } from 'react';

class Fortoggle extends Component {
    componentWillUnmount () {
        alert ("Unmount called")
    }
    render() {
        return (
            <>
                <h3>Toggle component</h3>
            </>
        );
    }
}

export default Fortoggle;