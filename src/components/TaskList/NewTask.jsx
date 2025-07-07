import React from 'react'

const NewTask = ({data}) => {
  return (
     <div className="task-box1">

            <div className="priority">
                <h3 id='prio'>{data.category}</h3>
                <h4 id='date'>{data.date}</h4>
            </div>

           <div>
             <h2 id='work'>{data.title}</h2>
            <p id='para'>{data.description}</p>
           </div>

           <div className='newTaskBtn'>
            <button id='accBtn'>Accept Task</button>
           </div>

     </div>
  )
}

export default NewTask
