import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './Component/student.jsx'

function App() {
  const student={
    pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s',
    name :'Prathmesh',
    roll:'2300321530145',
    branch:'AI',
    section:'B',
    college:'ABES'
  }

  return (
    <div>
      {/* <Student name="swapnil" roll="2300321530192"  branch="CSE AIML" section="B" college="ABES Engineering College"/> */}
      <Student data={student}/>
    </div>
   
  )
}

export default App