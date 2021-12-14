import React from 'react';

const personasServer = [
    {
        nombre: 'Geovanny'
    },
    {
        nombre: 'Arnubal'
    },
    {
        nombre: 'Yerson'
    }
]

class Square extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          personas: [],
          sessionIniciada: false,
      };
    }

    iniciarSesion = (usuario, contraseña) => {
        if(usuario == 'admin' && contraseña == '12345'){
            this.setState({
                sessionIniciada: true,
            });
        }else{
            alert('Los datos ingresados no son válidos');
        }
    }

    componentDidMount(){
        this.obtenerPersonas();
    }

    obtenerPersonas = () => {
        this.setState({
            personas: personasServer
        });
    }

    clickIngreso = () => {
        console.log('click en una funcion');
        this.setState({
            contador: this.state.contador + 1,
        });
    }
  
    render() {
        console.log(this.state.personas);
        return (
            <div>
                {
                    this.state.personas.map((item, index) => {
                        return(
                            <h1 key={index}>{item.nombre}</h1>
                        );
                    })
                }
            </div>
        );
    }
}

export default Square;