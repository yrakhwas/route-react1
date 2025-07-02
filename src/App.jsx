import './App.css'
import About from './components/About'
import Menu from './components/Menu'
import Privacy from './components/Privacy'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <div className="App">
        <header>
          <h1>Hello React</h1>
          <Menu/>
        </header>
        <main>      
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/privacy" element={<Privacy/>}/>
              <Route path="*" element={<h2>Page not found</h2>}/>
              {/* <About/>
              <Privacy/> */}
            </Routes>
        </main>
      </div>
    </>
  )
}

export default App
