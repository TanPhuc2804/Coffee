import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const Home = () => {
  axios.defaults.withCredentials=true
  
  return (
    <>
      <h2>Home</h2>
    </> 
  )
}

export default Home