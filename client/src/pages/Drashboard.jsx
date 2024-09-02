import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
const Drashboard = () => {

  axios.defaults.withCredentials=true
  useEffect(()=>{
    axios.get('')
  },[])
  return (
    <div>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Drashboard