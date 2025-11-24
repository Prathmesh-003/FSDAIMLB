import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login'
import Registration from './components/Registration'
import Dashboard from './components/Dashboard'
import MainLayout from './components/MainLayout'
function App() {
  const[logData,setLogDat]=useState();

  return (
    <>
      {/* <h2>Welcome online Shopping</h2> */}

      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration regData={setLogDat} />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/' element={<MainLayout/>} />
      </Routes>
      </BrowserRouter>
      <h2 style={{backgroundColor:'brown', color:'white'}}>
        {
          JSON.stringify(logData)
        }
      </h2>
    </>
  )
}

export default App