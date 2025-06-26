import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar'
import Add from './assets/components/Add'
import Home from './assets/components/Home'
import {Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Routes>
     <Route path='/'element={<Home/>}/>
     <Route path='/add'element={<Add/>}/>
     </Routes>
     </>
  )
}

export default App
