function ClickEvent(){
    let Name = "ali";
   function Sayhello(){
    Name = "Hello Ali"
    alert(Name);
   }
   //if there is no argument value just use fun name
   // if there is use arrow fun in tag ()=> alert("like this");

   //in say hello fun we update the value of variable and used in h1 but value of h1 is not updated
   // so for this problem we have to learn props in react;
    return(
        <div>
            <h1>{Name}</h1>
            <button onClick={()=> Sayhello()}>Click me</button>
            {/* <button onClick={Sayhello}>Click me</button> */}
        </div>
    )
}
export default ClickEvent;