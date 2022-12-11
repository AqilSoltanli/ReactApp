import axios from "axios";
import { useState } from "react"


const AddUser = () => {

    const [fin,setFin] = useState('');
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');

    const ConfirmHandler = (e) =>{
        e.preventDefault();
        const addUser = async () =>{
            const newUser = {
                id:fin,
                name:name,
                phone:phone
            }
             await axios.post('https://jsonplaceholder.typicode.com/users', {newUser})
        }
        addUser();
    }

    const FinHandler = (e) =>{
        setFin(e.target.value)
    }

    const NameHandler = (e) =>{
        setName(e.target.value)
    }

    const TelHandler = (e) =>{
        setPhone(e.target.value)
    }

  return (
    <div className="col-lg-5 mx-auto mt-5">
        <form onSubmit={ConfirmHandler}>
            <input onChange={FinHandler} type="text" className="form-control" placeholder="ID" />
            <input onChange={NameHandler} type="text" className="form-control my-3" placeholder="Name" />
            <input onChange={TelHandler} type="tel" className="form-control" placeholder="Phone" />
            <button type="submit" className="btn btn-success mt-3 w-100">ADD</button>
        </form>
      
    </div>
  )
}

export default AddUser
