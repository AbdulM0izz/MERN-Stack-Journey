//in table we have two button edit and delete when we click edit or add new form will open and data is that form will already there this pre fill form data
import {useState, useEffect} from 'react' 
const PreFilled = () =>{
    const [data, setdata] = useState([])
    const [Formdata, Setformdata] = useState({id: "", name: "", user: ""});
    useEffect (()=>{
        fetch("https//jsonplaceholder.com/user").then((response)=>{
            response.json().then((data)=>{
                // console.log(data)
                setdata(data);
                Setformdata({
                    id: data[0].id,
                    name: data[0].name,
                    user: data[0].user
                })
            })
        })
    },[]);

    const editrecord = (userid)=>{
        // console.log(data[userid - 1])
        let item = data[userid - 1]
        Setformdata({
            id: item.id,
            name: item.name,
            user: item.user
        })
    }

    return (
        <>
        <h2>Prefilled</h2>
        <table border={1}>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>User</td>
                    <td>Update record</td>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item,i)=>{
                     <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td><button onClick={()=> editrecord(item.id)}>edit</button></td>
                    </tr>
                    })
                }
            </tbody>
        </table>

        <div>
            <input type="text" value={Formdata.name}/><br></br>
            <input type="text" value={Formdata.id}/><br></br>
            <input type="text" value={Formdata.user}/><br></br>
            <button>update</button>
        </div>
        </>
    )
}
export default PreFilled