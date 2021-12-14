import React from 'react'

export default class Boton extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            texto: 'ENVIAR DATOS'
        }
    }

    cambiarTexto = () => {
        this.setState({
            texto: 'NUEVO TEXTO'
        });
    }

    render(){
        return(
            <button className="square" onClick={this.cambiarTexto}>
                {this.state.texto}
            </button>
        );
    }

}