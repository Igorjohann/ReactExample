import React, { Component } from 'react';


class MeuBtn extends Component {
    render() {
        //this.propos é acessivel em todo componente react
        return <button onClick={() => this.props.change(this.props.text)}>{this.props.text} </button>
    }
}

class MeuTitulo extends Component {
    render() {
        //this.propos é acessivel em todo componente react
        return <h2>voce cliclou {this.props.title} </h2>
    }
}

export default class App extends Component {
    //quando quero ter estado na minha aplicação eu coloco o contructor
    constructor(props) {
        super(props);

        this.state = {
            btnAtual: ''

        }
    }

    handleChange = (nome) => {
        this.setState({
            btnAtual: nome
        })

    }
    //criando propriadade pro botal chamada chage e pra ela dando poder para ela puxar a função
    render() {
        
        return (
            <>
                <MeuTitulo title={this.state.btnAtual} />

                <MeuBtn change={this.handleChange} text="Botão 01" />

                <MeuBtn change={this.handleChange} text="Botão 02" />

                <MeuBtn change={this.handleChange} text="Botão 03" />

            </>

        )
    }
}