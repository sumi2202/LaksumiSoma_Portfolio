import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contacts from './components/Contacts'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contacts />
    </div>
  );
}

export default App
