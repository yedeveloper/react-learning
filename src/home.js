import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap'

class HomeClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    closeSession = async () => {
        await localStorage.removeItem('isAuth')
        this.props.navigate('/inicio-sesion');
    }

    render(){
        return(
            <>
            <main>
                <h2>Bienvenido a la plataforma!</h2>
                <p>Acá se cargará todo el contenido.</p>
            </main>
            <Button onClick={this.closeSession} variant="primary">
                Cerrar sesión
            </Button>
            </>
        )
    }
}

function Home(props) {
    let navigate = useNavigate();
    return <HomeClass {...props} navigate={navigate} />
}

export default Home