import React from 'react'
import './TaskListN.css'

const TaskListNumbers = ({data}) => {
    if (!data?.taskNumbers) return <p>Loading task data...</p>;
  return (
    <div className='taskContainer'>
        <div className="taskWrap" id='box1'>
            <h2 className='head'>{data.taskNumbers.newTask}</h2>
            <h3 className='newTask'>New Task</h3>
        </div>

        <div className="taskWrap" id='box2'>
            <h2 className='head'>{data.taskNumbers.completed}</h2>
            <h3 className='newTask'>Completed Task</h3>
        </div>

        <div className="taskWrap" id='box3'>
            <h2 className='head'>{data.taskNumbers.active}</h2>
            <h3 className='newTask'>Active Task</h3>
        </div>

        <div className="taskWrap" id='box4'>
            <h2 className='head'>{data.taskNumbers.failed}</h2>
            <h3 className='newTask'>Failed Task</h3>
        </div>
      
    </div>
  )

}

export default TaskListNumbers
