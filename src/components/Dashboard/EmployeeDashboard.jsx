import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import './EmployeeDashboard.css'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({onLogout, data}) => {
  
  return (
    <div className='headerWrap'>
        
      <Header onLogout={onLogout} data={data}/>

      <TaskListNumbers data={data}/>
       
      <TaskList data={data}/>

    </div>
  )
}

export default EmployeeDashboard
