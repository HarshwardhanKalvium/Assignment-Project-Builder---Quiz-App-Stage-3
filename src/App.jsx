import { useState } from 'react'
import './App.css'
import AllRoutes from './components/AllRoutes'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  )
}

export default App
