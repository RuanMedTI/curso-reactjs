import React, { Component } from 'react';
import './estilo.css';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = ['A vida trará coisas boas se tiver paciência', 
        'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si', 
        'A maior de todas as torres começa no solo', 'Não há que ser forte. Há que ser flexível',
        'Siga os bons e aprenda com eles', 'O riso é a menor distância entre duas pessoas', 
        'Os defeitos são mais fortes quando o amor é fraco', 
        'Você é do tamanho do seu sonho'];
    }

    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = ' " ' + this.frases[numeroAleatorio] + ' " ';
        this.setState(state);
    }

    render(){
        return(
            <div className="container">
                <img src={require('./assets/biscoito.png')} className="img" />

                <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>
        );
    }
}

class Botao extends Component {
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        );
    }
}

export default App;