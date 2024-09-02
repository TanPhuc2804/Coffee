import { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Nav from './partials/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Drashboard from './pages/Drashboard'
import Profile from './pages/Profile'
import Logout from './pages/Logout'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {
  const [role, setRole] = useState('')

  axios.defaults.withCredentials=true
  useEffect(()=>{
    axios.get('http://localhost:3000/user/verify')
      .then(res=>{
          if(res.data.login){
            setRole(res.data.role)
          }else{
            setRole('')
          }
      }).catch(err=> console.log(err))
  },[])

  return (
    <>
      <BrowserRouter>
        <Nav role ={role} />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/login' element={<Login setRole={setRole}/>} ></Route>
          <Route path='/register' element={<Register />} ></Route>
          <Route path='/drashboard' element={<Drashboard />} ></Route>
          <Route path='/user' element={<Profile />} ></Route>
          <Route path='/logout' element={<Logout setRole={setRole} />} ></Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
