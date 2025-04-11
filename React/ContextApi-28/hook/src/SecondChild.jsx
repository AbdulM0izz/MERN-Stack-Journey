import React,{useContext} from "react"
import { Mydata } from "./ContetApi"

let SecondComp = () => {
    const { ValueData , Getsalary } = useContext(Mydata)
    const Salary = 5000;
    return (
        <>
        <h1>Second Comp | {ValueData}</h1>
        <button onClick={()=> Getsalary(Salary)}>Salary</button>
        </>
    )
}
export default SecondComp