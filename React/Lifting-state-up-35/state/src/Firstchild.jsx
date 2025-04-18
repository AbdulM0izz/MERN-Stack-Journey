let Firstchild = (prop) => {
    let name = "ali"
    return (
        <>
           <h1>{prop.name}</h1>
           <button onClick={()=> prop.alarm(name)}>click</button>
        </>
    )
}
export default Firstchild