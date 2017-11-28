import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import UsuarioItem from './UsuarioItem'
import Usuarios from './Usuarios'

class UsuarioBase extends Component{
    render(){
        return (
            <div className='row'>
                <div className= 'col-md-2'>
                    <h3>Categorias</h3>
                    <Route  path={this.props.match.url} component={Usuarios}/>
                </div>
                <div className='col-md-10'>
                <Route exact path={this.props.match.url}  component={UsuarioItem}/>
                <Route  path={this.props.match.url+'/:id'}  component={UsuarioItem}/>                
            </div>
            </div>
        )
    }
}

export default UsuarioBase