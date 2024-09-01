import React from 'react'
import{Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import '../css/login.css'
const Login = () => {
  const [email,setEmail] =useState('')
  const [password,setPassword] = useState('')
  const [message,setMessage] = useState('')
  const navigate = useNavigate()
  axios.defaults.withCredentials=true
  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/user/login',{email,password})
      .then((res)=>{
        if(res.data.login && res.data.role ==='user'){
          navigate('/drashboard')
        }
      })
      .catch(err=>{
        const data = err.response.data
        setMessage(data.message)
      })

  }
  return (
    <div className='container-login' >
    <div className='form-login'>
    <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='item-input'>
          <label htmlFor='email'>Email: </label>
          <input className='inputClass' placeholder='Enter your email' type='email' name='email' 
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <i className="bi bi-envelope"></i>
        </div>
     
        <div className='item-input'>
          <label htmlFor='password'>Password: </label>
          <input className='inputClass' placeholder='Enter your password' type='password' name='password' autoComplete='off'    onChange={(e)=>{setPassword(e.target.value)}}/>
          <i className="bi bi-eye"></i>
        </div>
        {message !== '' && <h3 className='error-login'>{message}</h3> }
        <button className="btn-login">Login</button>

        <div className='link-account'>
            <Link to="/register" className='link'>Don't you have account ?</Link>
            <Link className='link'>Forgot password ?</Link>
        </div>

      </form>
    </div>
  </div>
  )
}

export default Login