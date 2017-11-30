import React from 'react'
class UsuarioItem extends React.Component {
    constructor(props) {
        super(props)
        this.carregaDetalhe = this.carregaDetalhe.bind(this)
        this.salvar = this.salvar.bind(this)
        this.changeNome = this.changeNome.bind(this)
        this.state = { items: { "id": "0", "email": "email", "senha": "senha", "nome": "nome" } }
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
    salvar() {
        console.log('salvar()')
        let obj = this.state.items
        obj.nome=this.refs.nome.value
        obj.email=this.refs.email.value
        let jobj = JSON.stringify(obj)
        var id = this.props.match.params.id
        fetch('http://msansone.com.br:8080/usuarios/' + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: jobj
        })
    }

    changeNome(e) {
        //alert(this.state.items[0])
        //this.state.items.nome=e.target.value

        //var obj = JSON.parse(this.state.items[0])
        //obj.nome=e.target.value
        //this.setState(JSON.stringify(obj))
    }

    render() {
        console.log('render()')
        return (
            <div className='row'>
                <div>{JSON.stringify(this.state.items[0])}</div>

                <div>Usuario:</div><br />
                <div className='col-md-2'>Nome:</div>
                <div className='col-md-10'><input type="text"
                    ref="nome"
                />
                </div>
                <div className='col-md-2'>E-mail:</div>
                <div className='col-md-10'><input type="text"
                    ref="email"
                />
                </div><br />
                <div className='col-md-12'><input type="button"
                    value="SALVAR"
                    onClick={this.salvar} />
                </div>
            </div>
        )
    }
}

export default UsuarioItem