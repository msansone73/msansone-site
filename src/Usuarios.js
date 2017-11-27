import React from 'react';

export default class Usuarios extends React.Component {

    constructor(){
        super()
        this.state={items:[]}
    }

    componentDidMount(){
        fetch('http://msansone.com.br:8080/usuarios/')
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
            <div>Usuarios:</div>
            {this.state.items.map(
                item => {return <div key={item.id}> {item.email}</div>}
            )}
        </div>
        )
    }
}
