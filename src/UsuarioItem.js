import React from 'react'
import {
    Link
    } from 'react-router-dom'
class UsuarioItem extends React.Component
{
    constructor(){
        super()
        this.state={items:[]}
    }

    componentDidMount(){
        let url='http://msansone.com.br:8080/usuarios/'+this.props.match.params.id
        console.log(url)
        fetch(url)
        .then ( result => {
            let data=result.json()
            return data;
        })
        .then((json) => {
            this.setState({items:json})
        })
        .catch(function() {
            console.log("Deu ruim.")

        });
    }
    render(){
        return(
            <div>
        <div>
            <div>Usuario:</div>
            {this.state.items.email}
        </div>

        <Link to='/Usuarios'>Voltar</Link>
        </div>
        )
    } 
}

export default  UsuarioItem