
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddUser from './pages/AddUser';
import NavBar from './components/NavBar';
import axios from 'axios';
import { useEffect, useState } from 'react';





function App() {
 
  const[users,setUsers] = useState([]);
  


    useEffect(() => {
      const getUsers = async() => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data)
      }
      getUsers()
    },[])

    

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage userList={users}/>}/>
          <Route path='/add' element={<AddUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
