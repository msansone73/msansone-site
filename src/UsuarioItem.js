import React from 'react'
class UsuarioItem extends React.Component
{
    constructor(props){
        super(props)
        this.state={items:[]}
    }

    carregaDetalhe(){
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

    componentWillUpdate(){
        console.log('componentWillUpdate()') 
    }
    componentDidUpdate(){
       // this.carregaDetalhe()
       this.carregaDetalhe()
       
       console.log('componentDidUpdate()')
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