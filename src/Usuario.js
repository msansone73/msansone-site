import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import UsuarioItem from './UsuarioItem'

class Usuario extends Component{
    render(){
        return (
            <div className='row'>
                <div className= 'col-md-2'>
                    <h3>Categorias</h3>
                    LINK....
                    <div className='col-md-10'>
                        <Route exact path={this.props.match.url} component={UsuarioItem}/>

                    </div>
                </div>
            </div>
        )
    }
}

export default Usuario