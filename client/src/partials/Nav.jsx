import React from 'react'
import { Link } from 'react-router-dom'
import '../css/header.css'
const Nav = ({ role }) => {
    return (
        <nav className='container-nav'>
            <Link to="/" className='nav-home'>Coffee Family</Link>
            <div className='nav-right'>
                {
                    role === 'admin' &&
                    <Link to='/drashboard' className='nav-link'>Drashboard</Link>
                }
                {
                    role === '' ?
                        <Link to='/login' className='nav-link'>Login</Link>
                        :
                        <>
                            <Link to='/user' className='nav-link'>User</Link>
                            <Link to='/logout' className='nav-link'>Logout</Link>
                        </>
                }
            </div>
        </nav>
    )
}

export default Nav