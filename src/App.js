import React, {useState} from 'react'
import Login from './components/Login'
import Navbar from './components/Navbar'
import './App.css'
import Dashboard from './components/Dashboard' 


export default function App() {

  const [loggedin, setLoggedin] = useState(false)

  return (
    <div className='app'>
      <Navbar loggedin={loggedin} setLoggedin={setLoggedin} />
      {!loggedin
        ? <Login login={{loggedin, setLoggedin}}/> 
        : <Dashboard/>
      }
    </div>
  )
}
