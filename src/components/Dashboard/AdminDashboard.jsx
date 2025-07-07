import React from 'react'
import Header from '../others/Header'
import './AdminDashboard.css'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = ({onLogout}) => {

  

  return (
    <div className='adminContainer'>
      <Header onLogout={onLogout} />

      <CreateTask/>

      <AllTask/>
      

    </div>
  )
}

export default AdminDashboard
