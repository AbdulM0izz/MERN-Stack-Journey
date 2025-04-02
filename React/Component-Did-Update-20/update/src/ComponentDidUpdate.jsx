import React, { Component } from 'react';

class ComponentDidUpdate extends Component {
    constructor() {
        super();
        console.log("Constructor");
        this.state = {
            name: "Ali"
        };
    }

    // We don't update any state or prop in componentDidUpdate to avoid an infinite loop
    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update", prevState.name, this.state.name);

        if (prevState.name === this.state.name) {
            alert("States are equal");
        }
    }

    render() {
        console.log("Render");
        return (
            <>
                <h1>Component Did Update | Lifecycle Method</h1>
                <h3>{this.state.name}</h3>
                <button onClick={() => this.setState({ name: "Abdul Moiz" })}>
                    Click
                </button>
            </>
        );
    }
}

export default ComponentDidUpdate;