import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import UsuarioItem from './UsuarioItem'
import Usuarios from './Usuarios'

class UsuarioBase extends Component{
    render(){
        return (
            <div className='row'>
                <div className= 'col-md-4'>
                    <Route  path={this.props.match.url} component={Usuarios}/>
                </div>
                <div className='col-md-8'>
                <Route exact path={this.props.match.url}  component={UsuarioItem}/>
                <Route  path={this.props.match.url+'/:id'}  component={UsuarioItem}/>                
            </div>
            </div>
        )
    }
}

export default UsuarioBase