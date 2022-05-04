/* eslint-disable react/react-in-jsx-scope */
import Nav from './components/Navbar'
import './App.css'
// eslint-disable-next-line no-unused-vars
import Foo from './components/Footer'
import { Carrusel } from './components/Carrusel'

function App () {
  return (
    <div className="App">
      <header className="App-header">
      <Nav/>
      </header>
      <Carrusel/>
      <Foo/>
    </div>
  )
}

export default App
