import React, { Component } from 'react'
import {
BrowserRouter as Router,
Route,
Link
} from 'react-router-dom'

import Home from  './Home'
import Sobre from  './Sobre'
import Trabalhos from './Trabalhos'
import Usuarios from './Usuarios'
import UsuarioItem from './UsuarioItem'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className='navbar navbar-inverse'>
            <div className='container'>
              <div className='navbar-header'>
                <a href='/' className='navbar-brand'>MSansone</a>
              </div>
            </div>
            <ul className='nav navbar-nav'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/Trabalhos'>Trabalhos</Link></li>
              <li><Link to='/Usuarios'>Usuario</Link></li>
              <li><Link to='/sobre'>Sobre</Link></li>
            </ul>
          </nav>
          <div className='Container'>
            <Route exact path='/' component={Home} />
            <Route exact path='/Trabalhos' component={Trabalhos} />
            <Route path='/Usuarios/:id' component={UsuarioItem} />
            <Route exact path='/Usuarios' component={Usuarios} />
            <Route exact path='/sobre' component={Sobre} />
          </div>
        </div>
     </Router>
    );
  }
}

export default App
