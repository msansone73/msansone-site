import React from 'react'
class UsuarioItem extends React.Component
{
    constructor(props){
        super(props)
        this.carregaDetalhe=this.carregaDetalhe.bind(this)
        this.state={items:[]}
    }

    carregaDetalhe(id){
        let url='http://msansone.com.br:8080/usuarios/'+id
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

    ComponentDidMount(){
        console.log('ComponentDidMount()')
        var id = this.props.match.params.id
        this.carregaDetalhe(id) 
    }

    componentWillReceiveProps(newProps){
        console.log('componentWillReceiveProps()')
        var id = newProps.match.params.id
        this.carregaDetalhe(id)         
    }

    render(){
        console.log('render()')
        return(
            <div className='row'>
            
            <div>Usuario:</div><br/>
            <div className= 'col-md-2'>Nome:</div> <div className= 'col-md-10'><input type = "text" value = {this.state.items.nome}/></div>
            <div className= 'col-md-2'>E-mail:</div> <div className= 'col-md-10'><input type = "text" value = {this.state.items.email}/></div>
            
        </div>
        )
    } 
}

export default  UsuarioItem