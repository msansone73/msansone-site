import React from 'react';
import {
    Link
    } from 'react-router-dom'
export default class Usuarios extends React.Component {

    constructor(){
        super()
        this.state={listaItems:[], items:[]}
    }

    deletar(id){

        console.log("deletar")

        fetch('http://msansone.com.br:8080/usuarios/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }
    componentDidMount(){
        fetch('http://msansone.com.br:8080/usuarios/')
        .then ( result => {
            let data=result.json()
            return data;
        })
        .then((json) => {
            this.setState({listaItems:json})
        })
        .catch(function() {
            console.log("Deu ruim.")

        });
    }
    render(){
        return(
        <div>
            <div>Usuarios:</div>
            {this.state.listaItems.map(
                item => {
                    return <div key={item.id}> 
                    <Link to={'/Usuarios/'+item.id}>  {item.nome}</Link>
                    <button  type="button" className="btn btn-primary" onClick={this.deletar.bind(this, item.id)}> Del</button> 
                    </div>}
            )}
        </div>
        )
    }
}
