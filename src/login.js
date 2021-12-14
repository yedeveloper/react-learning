import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

class LoginClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            usuario: '',
            password: '',
        }
    }

    enviaDatos =  async () => {
        console.log(this.state);
        const {usuario, password} = this.state;
        if(usuario != "" && password != ""){
            if(usuario == 'admin' && password == "12345"){
                await localStorage.setItem('isAuth', true);
                this.props.navigate('/home');
            }else{
                alert("Los datos ingresados no son válidos");
            }
        }else{
            alert('Debes ingresar los datos para continuar');
        }
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col md={{span: 6, offset: 3}}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control onChange={e => this.setState({usuario: e.target.value})} value={this.state.usuario} type="email" placeholder="Ingrese el usuario" />
                           
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control onChange={e => this.setState({password: e.target.value})} value={this.state.password} type="password" placeholder="Ingresa tu contraseña" />
                        </Form.Group>
                        <Button onClick={this.enviaDatos} variant="primary">
                            Enviar datos
                        </Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function Login(props) {
    let navigate = useNavigate();
    return <LoginClass {...props} navigate={navigate} />
}

export default Login