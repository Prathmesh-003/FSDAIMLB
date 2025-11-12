import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/login'
import Registration from './components/Registration'
import Dashboarad from './components/Dashboard'
import MainLayout from './components/MainLayout'

function App() {
  

  return (
    <>
    <BrowserRouter >
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/dashboard' element={<Dashboarad/>}/>
      <Route path='/mainlayout' element={<MainLayout/>}/>

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App