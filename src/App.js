import React, { Component } from 'react'
import {
BrowserRouter as Router,
Route,
Link
} from 'react-router-dom'

import Home from  './Home'
import About from  './About'
import Trabalhos from './Trabalhos'
import UsuarioBase from './UsuarioBase'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className='navbar navbar-inverse'>

            <ul className='nav navbar-nav'>
              <li className='navbar-brand'>Marcio Sansone</li>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/Trabalhos'>Works</Link></li>
              <li><Link to='/Usuarios'>Usuario</Link></li>
              <li><Link to='/about'>About</Link></li>
            </ul>
          </nav>
          <div className='Container'>
            <Route exact path='/' component={Home} />
            <Route exact path='/Trabalhos' component={Trabalhos} />
            <Route  path='/Usuarios' component={UsuarioBase} />
            <Route exact path='/about' component={About} />
          </div>
        </div>
     </Router>
    );
  }
}

export default App
