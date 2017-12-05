import React from 'react'
import $ from 'jquery'

class UsuarioItem extends React.Component {
    constructor(props) {
        super(props)
        this.carregaDetalhe = this.carregaDetalhe.bind(this)
        this.salvar = this.salvar.bind(this)
        this.limpar = this.limpar.bind(this)
    
        this.state = { items: { "id": "", "email": "", "senha": "", "nome": "" } }
    }

    carregaDetalhe(id) {
        console.log('carregaDetalhe(id)')
        let url = 'http://msansone.com.br:8080/usuarios/' + id
        console.log(url)
        fetch(url)
            .then(result => {
                let data = result.json()
                return data;
            })
            .then((json) => {
                this.setState({ items: json })
                this.refs.nome.value=this.state.items.nome
                this.refs.email.value=this.state.items.email
            })
            .catch(function () {
                console.log("Deu ruim.")
            });
            console.log("state="+JSON.stringify(this.state))
    }

    ComponentDidMount() {
        console.log('ComponentDidMount()')
        var id = this.props.match.params.id
        this.carregaDetalhe(id)
    }

    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps()')
        var id = newProps.match.params.id
        this.carregaDetalhe(id)
    }

    limpar() {
        console.log('limpar()')
        this.refs.nome.value=""
        this.refs.email.value=""
        this.setState({ items: { "id": "", "email": "", "senha": "", "nome": "" } })
        console.log("state="+JSON.stringify(this.state))
    }

    salvar() {
        console.log('salvar()')
        console.log(this.state.items.id)
        // INSERIR: Entidade nova
        if (this.state.items.id==="")
        {
            console.log("Inserir")
            console.log("state="+JSON.stringify(this.state))
            let obj = this.state.items
            obj.nome=this.refs.nome.value
            obj.email=this.refs.email.value
            obj.senha="123456"
            console.log("state="+JSON.stringify(this.state))
            let jobj = JSON.stringify(obj)
            let saida=""


            $.ajax({
                'type': "POST",
                'url': "http://msansone.com.br:8080/usuarios",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                success: function (msg) {
                    console.log(msg)
                    saida=msg
                },
                data: jobj
            });

            this.setState({items:saida})
            console.log("state="+JSON.stringify(this.state))

        }
        // ALTERAR: Entidade existente
        else {
            console.log("Alterar")
            console.log("state="+JSON.stringify(this.state))
            let obj = this.state.items
            obj.nome=this.refs.nome.value
            obj.email=this.refs.email.value
            let jobj = JSON.stringify(obj)
            //let id = this.props.match.params.id
            let id = this.obj.id
            fetch('http://msansone.com.br:8080/usuarios/' + id, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: jobj
            })
        }
    }

    salvar_bkp() {
        console.log('salvar()')
        console.log(this.state.items.id)
        // INSERIR: Entidade nova
        if (this.state.items.id==="")
        {
            console.log("Inserir")
            let obj = this.state.items
            obj.nome=this.refs.nome.value
            obj.email=this.refs.email.value
            obj.senha="123456"
            let jobj = JSON.stringify(obj)
            fetch('http://msansone.com.br:8080/usuarios', 
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                },
                body: jobj
              }).then((json) => {
                console.log("ret="+JSON.stringify(json))
                this.setState({ items: json })
            })
            .catch(function () {
                console.log("Deu ruim.")
            })
        }
        // ALTERAR: Entidade existente
        else {
            console.log("Alterar")
            let obj = this.state.items
            obj.nome=this.refs.nome.value
            obj.email=this.refs.email.value
            let jobj = JSON.stringify(obj)
            //let id = this.props.match.params.id
            let id = this.obj.id
            fetch('http://msansone.com.br:8080/usuarios/' + id, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: jobj
            })
        }
    }


    render() {
        console.log('render()')
        return (
            <table className='form-group'>
            <tbody>
                <tr>
                    <td colSpan="2">
                        <h2><b>USER</b></h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Name   </label>
                    </td>
                    <td>
                        <input type="text" className="form-control" id="nome" aria-describedby="Name" placeholder="enter name" ref="nome"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>E-mail   </label>
                    </td>
                    <td>
                        <input type="text" className="form-control" id="email" aria-describedby="Email" placeholder="enter email" ref="email"/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                    <br/>
                        <button type="button" className="btn btn-primary" onClick={this.limpar} >New</button>  
                        <button type="button" className="btn btn-primary" onClick={this.salvar} >Save</button>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}

export default UsuarioItem