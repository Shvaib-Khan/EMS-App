import React from 'react'
import './TaskList.css'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    
    <div className='taskContainer1' id='taskCont1'>

        {data?.tasks?.map((elem, index)=>{
           return( 
            
            <div className='pageCont' key={index}>
            
                 {elem.active && <AcceptTask data={elem}/>}
                 {elem.newTask && <NewTask data={elem} />} 
                 {elem.completed && <CompleteTask  data={elem}/>} 
                 {elem.failed && <FailedTask data={elem} />}
           
            </div>

           )

        })}
        
     </div>  
        
    
  )
}

export default TaskList
