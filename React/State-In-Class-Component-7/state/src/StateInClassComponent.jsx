
import React,{Component} from 'react';

class StateInClassComponent extends Component {
    constructor(){
        super();// to call paretn class in child

        this.state ={
            // name: 0
            name: "ALi"
        }
    }
    updatename(){
    //    this.setState({name: this.state.name+1});
    this.setState({name: "Abdul Moiz"})
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={()=> this.updatename()}>Click ME</button>
            </div>
        )
    }
}

export default StateInClassComponent;