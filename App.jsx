import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes, Link} from 'react-router-dom'
import Main from './Components/Main'
import React from "react";



function App() {
  const [count, setCount] = useState(0)
  
    

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
         </Routes>
    </>
  )
}
export default App;
