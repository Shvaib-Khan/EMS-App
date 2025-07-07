import React, { useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import './App.css'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useEffect,useState } from 'react';
import { AuthContext } from './context/AuthProvider'


const App = () => {


  const [user, setUser] = useState(null)

  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const authData=useContext(AuthContext)

  useEffect(() => {
    
    // if(authData){
    //   const loggedInUser= localStorage.getItem("loggedInUser")
    //   console.log("Restoring user from localStorage:", loggedInUser);
    //   if(loggedInUser){
    //     setUser(JSON.parse(loggedInUser).firstName);
    //   }

    // }

  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    const parsedUser = JSON.parse(loggedInUser);

    if (parsedUser.role === 'admin') {
      setUser('admin'); // You can change this to setUser(parsedUser) if you want
    } else {
      setUser('employee'); // or setUser(parsedUser)
      setLoggedInUserData(parsedUser); // Restore employee details
    }
  }
     
  }, [authData]);
  
  

  const handleLogin=(email,password)=>{

     console.log("Trying login with:", email, password);
    if(email=='admin@me.com' && password=='123'){
      
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
      
      
    }
    else if(authData){

    const employee=authData.employees.find((e)=>email==e.email && password==e.password)
      
    //  if(employee){
    //     setUser('employee')
    //     localStorage.setItem('loggedInUser', JSON.stringify(employee))
    //     setLoggedInUserData(employee)
    //  }

       const employeeWithRole = { ...employee, role: 'employee' };
       setUser('employee');
       setLoggedInUserData(employeeWithRole);
       localStorage.setItem('loggedInUser', JSON.stringify(employeeWithRole));
      
      
    }
    else{
      console.log("Login failed");
      alert("Invalid credentials")
    }

  }
  //handleLogin('admin@me.com',123)


  const handleLogout = () => {
      setUser(null);
      localStorage.removeItem('loggedInUser');
      console.log('Logged out successfully');
  };


  return (
    <>
    <div className='appContainer'>

       {/* {!user ? <Login handleLogin={handleLogin}/> : ''}

       {user === 'admin' ? (
         <AdminDashboard />
          ) : user === 'employee' ? (
            <EmployeeDashboard />
          ) : (
         ''
         )} */}


        {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <>
          <AdminDashboard  onLogout={handleLogout}/>
         
        </>
      ) : user === 'employee' ? (
        <>
          <EmployeeDashboard onLogout={handleLogout} data={loggedInUserData}/>
          
        </>
      ) : null}

      
       



    </div>
   

    </>
  )
}

export default App
