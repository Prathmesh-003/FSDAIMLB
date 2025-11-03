import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Students'
import './Components/student.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Student name="Prathmesh" age="21"/>
    </>
  )
}

export default App
