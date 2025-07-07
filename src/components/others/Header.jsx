import React from 'react'
import './Header.css'

const Header = ({onLogout, data}) => {

 
 // console.log({data})
  return (
    <div className='headContainer'>
      <h1 className='head'>Hello <br/><span className='naam'>{data?.firstName || "Shvaib"}</span> &#128075;</h1>
      <button className='btn' onClick={onLogout}>Log out</button>
    </div>
  )
}

export default Header
