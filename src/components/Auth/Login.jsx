import React, { useState } from 'react'
import './Login.css'

const Login = ({handleLogin}) => {

    const[email,setEmail]=useState('')
    const[pass,setPass]=useState('')


    const submitHandler=(e)=>{
        e.preventDefault();
        // console.log("Email is: ",email);
        // console.log("Password is: ",pass)

        handleLogin(email,pass)

        setEmail("")
        setPass("")
    }

  return (
    <div className='container'>
      
      <div className='wrapper'>
        <h1 id='loginBtn'>Login</h1>
        <form className='formWrap' onSubmit={(e)=>{
            submitHandler(e);
        }}>
            <input required type="email" placeholder='Email'  className='item1'
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
            <input required type="password" placeholder='Password' className='item2'
            value={pass}
            onChange={(e)=>{
                setPass(e.target.value)
            }} />
            <button className='item3'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
