import React  from 'react'
import LoginForm from '../components/LoginForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

import './style/Login.css'
const Login = () =>{
    return(
        <div className="Login">
            <Header/>
            <LoginForm/>
            <Footer/>
        </div>
    )
}
export default Login