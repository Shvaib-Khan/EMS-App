import React from 'react'

const FailedTask = ({data}) => {
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

            <div className='failBtn'>
                <button id='failTaskBtn'>Failed</button>
            </div>

        </div>
  )
}

export default FailedTask
