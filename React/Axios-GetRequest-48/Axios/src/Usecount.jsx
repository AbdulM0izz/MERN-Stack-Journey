import { useState } from "react"
const useCount = () => {
  const [Count, Setcount] = useState(0)
     let increment = ()=>{
       Setcount(Count+1)
     }
     let decrement = ()=>{
         Setcount(Count-1)
     }
     return [Count , increment , decrement]
}
export default useCount