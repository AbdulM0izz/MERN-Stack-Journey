
import React,{Component} from "react";

class ComponentDidMount extends Component {

    constructor (){
        super();
        console.log("Constructor");
        this.state = {
            name : "Ali"
        }
    }

    componentDidMount (){
        console.log("Component did mount");
    }

    render (){
        console.log("Render");
        return (
            <>
              <h2>Component Did Mount | Lifecycle Method</h2>
              <h3>{this.state.name}</h3>
              <button onClick={() => this.setState({name: "Moiz"})}>ChangeName</button>
            </>
        )
    }
}

export default ComponentDidMount