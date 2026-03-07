import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './About'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <About />
    </div>
  );
}

export default App
