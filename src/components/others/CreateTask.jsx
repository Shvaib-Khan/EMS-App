import React, { useState,useEffect } from 'react'
import './CreateTask.css'

const CreateTask = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')


  // const submitHandler=(e)=>{
  //   e.preventDefault()

  // setNewTask({title,description,date,category,active: 'false', newTask: 'true', completed: 'false',failed:'false'});

  // const data=JSON.parse(localStorage.getItem('employees'))
  // data.forEach(function(elem){
  //   if(asignTo==elem.firstName){
  //     elem.tasks.push(newTask)
  //     console.log(elem)
  //   }

  //   localStorage.setItem('employees',JSON.stringify(data))

  // })

  // setAsignTo('')
  // setCategory('')
  // setDate('')
  // setDescription('')
  // setTitle('')
  
  // }

  const submitHandler = (e) => {
  e.preventDefault();

  const newTaskAsign = {
    title: title,
    description: description,
    date: date,
    category,
    active: false,
    newTask: true,
    completed: false,
    failed: false,
  };

  // const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
  // if (storedUser && storedUser.tasks) {
  //   storedUser.tasks.push(newTask);
  //   localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
  //   alert("Task created and saved!");
  // } else {
  //   alert("No logged-in user or user has no task list.");
  // }

  const data=JSON.parse(localStorage.getItem('employees'))
  data.forEach(function(elem){
    if(asignTo==elem.firstName){
      elem.tasks.push(newTaskAsign)
      //elem.taskNumbers.newTask=elem.taskNumbers.newTask+1;
      console.log(elem)
    }

    localStorage.setItem('employees',JSON.stringify(data))
  })

  // Optionally clear the form:
  setTitle('');
  setDescription('');
  setDate('');
  setAsignTo('');
  setCategory('');
};


  return (
    <div id='formWrap'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} id='form1'>
            <div id='info1'>
               <h3>Task title</h3>
               <input 
               value={title}
               onChange={(e)=>{
                setTitle(e.target.value)
               }}
               type="text" placeholder='make a UI design:' className='input' />

               <h3>Date</h3>
               <input 
               value={date}
               onChange={(e)=>{
                setDate(e.target.value)
               }}
               type="date" className='input' />

               <h3>Assign to</h3>
                <input
                value={asignTo}
               onChange={(e)=>{
                setAsignTo(e.target.value)
               }}
                 type="text" placeholder='employee name:' className='input'/>

                <h3>Category</h3>
                <input
                value={category}
               onChange={(e)=>{
                setCategory(e.target.value)
               }}
                 type="text" placeholder='design, dev etc.' className='input'/>
            </div>

            <div id='info2'>
                <h3>Description</h3>
                <textarea 
                value={description}
               onChange={(e)=>{
                setDescription(e.target.value)
               }}
                name="" id="" className='input'></textarea >

                <button id='btn' className='input'>Create Task</button>
            </div>
            
                   
        </form>

      </div>
  )
}

export default CreateTask
