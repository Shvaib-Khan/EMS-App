import React, { useContext } from 'react'
import './AllTask.css'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData=useContext(AuthContext)
    

  return (

    
    <div className='container2'>
    
            <div className="headingWrapper">
                <h2>Employee Name</h2>
                <h2>New Task</h2>
                <h2>Active Task</h2>
                <h2>Complted Task</h2>
                <h2>Failed Task</h2>
                </div>
        {authData.employees.map(function(elem,index){

            return  <div className='wrapper2' key={index}>
                <h2>{elem.firstName}</h2>
                <h2>{elem.taskNumbers.newTask}</h2>
                <h2>{elem.taskNumbers.active}</h2>
                <h2>{elem.taskNumbers.completed}</h2>
                <h2>{elem.taskNumbers.failed}</h2>
               
            </div>
        
    })}
       

        
      
    </div>
  )
}

export default AllTask
