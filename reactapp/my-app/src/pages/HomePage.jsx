
import axios from "axios";
import { useState } from "react";


const HomePage = (props) => {
    const{id,name,phone} = props.userList;
    const[value,setValue] = useState('')
    const filterUser = props.userList.filter(user => user.name.toLowerCase().includes(value.toLowerCase()))
    const InputHandler = (e) =>{
        setValue(e.target.value)
      }

    
    

  return (
    <div className="container mt-2">
        <input onChange={InputHandler} type='text' placeholder='Search' className='form-control w-50 mx-auto mt-3'/>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Fullname</th>
      <th scope="col">Phone</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
    {
        filterUser.map(user => {
            return(
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button onClick={() => {
                      axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`)
                      .then(response => console.log(response))
                      .catch(err => console.log(err))  
                    }} className="btn btn-success m-1">Update</button>

                    <button onClick={() => {
                      axios.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
                      .then(response => console.log(response))
                      .catch(err => console.log(err))  
                    }} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
            )
        })
    }
  </tbody>
</table>
    </div>
  )
}

export default HomePage
