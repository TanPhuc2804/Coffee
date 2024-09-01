import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../css/register.css'

const roles = ["admin", 'user']

const Register = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [role, setRole] = useState('admin')
  const [isRegister, setIsRegister]= useState(false)
  const [stateRegister, setStateRegister] = useState('')

  const navigate = useNavigate()
  axios.defaults.withCredentials=true
  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/user/register',{email,username,password,role})
      .then((res)=>{
        setStateRegister('')
        let isTrue = res.data.register
        if(isTrue){
          navigate('/login')
        }
      })
      .catch((err)=>{
        setStateRegister(err.response.data.register)
        setIsRegister(false)
      })
  }

  return (
    <div className='container-register' >
      <div className='form-register'>
      <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className='item-input'>
            <label htmlFor='email'>Email: </label>
            <input className='inputClass' placeholder='Enter your email' type='email' name='email' 
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <i className="bi bi-envelope"></i>
          </div>
          {!isRegister && stateRegister!=='' &&(<div className='error-register'>{stateRegister}</div>)}

          <div className='item-input'>
            <label htmlFor='usernanme'>Username: </label>
            <input className='inputClass' placeholder='Enter your username' name='usernanme'  onChange={(e)=>{setUsername(e.target.value)}} />
            <i className="bi bi-person"></i>
          </div>

          <div className='item-input'>
            <label htmlFor='password'>Password: </label>
            <input className='inputClass' placeholder='Enter your password' type='password' name='password' autoComplete='off'    onChange={(e)=>{setPassword(e.target.value)}}/>
            <i className="bi bi-eye"></i>
          </div>

          <div className='item-input'>
            <label htmlFor='repassword'>Repassword: </label>
            <input className='inputClass' placeholder='Enter your repassword' name='repassword' autoComplete='off' type='password'  onChange={(e)=>{setRepassword(e.target.value)}} />
            <i className="bi bi-eye"></i>
          </div>

          <div className='item-input'>
            <label htmlFor='role'>Role: </label>
            <select name='role' id='role'  onChange={(e)=>{setRole(e.target.value)}} >
              {roles.map((role, index) => (
                <option className='option-item' value={role} key={index} >{role} </option>
              ))}
            </select>
          </div>

          <button className="btn-register">Register</button>

          <div className='link-account'>
              <Link to="/login" className='link'>Do you have account ?</Link>
              <Link className='link'>Forgot password ?</Link>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Register