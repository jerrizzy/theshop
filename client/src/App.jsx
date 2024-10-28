import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

     <div class="fixed-circles">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
    </div>

      <NavBar />
      <Home />
    </div>
  )
}

export default App
