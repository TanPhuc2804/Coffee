import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Logout = ({setRole}) => {
    const navigate = useNavigate()
    axios.defaults.withCredentials=true
    useEffect(()=>{
        axios.get("http://localhost:3000/user/logout")
            .then(res=>{
                if(res.data.logout){
                    setRole('')
                    navigate('/')
                }
            })
            .catch((err)=>console.log(err))
    },[])
  
}

export default Logout