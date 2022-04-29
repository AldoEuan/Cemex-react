/* eslint-disable react/react-in-jsx-scope */
import Nav from './components/Navbar'
import './App.css'
// eslint-disable-next-line no-unused-vars
import Foo from './components/Footer'

function App () {
  return (
    <div className="App">
      <header className="App-header">
    <Nav/>
    <Foo/>
      </header>
    </div>
  )
}

export default App
