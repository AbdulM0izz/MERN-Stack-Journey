
let FunctionAsProps = (props) =>{
    //two ways to get props mentioned in button
    return(
        <div>
            
            <h1>Hello.......</h1>
            <button onClick={props.data}>Click me</button>
            {/* <button onClick={()=> props.data()}>Click me</button> */}
        </div>
    )
}
export default FunctionAsProps