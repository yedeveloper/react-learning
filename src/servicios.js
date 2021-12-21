import React from 'react';
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { reject } from 'q';
import { rejects } from 'assert';

//const axios = require('axios');

export default class Servicios extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }
    
    servicioGet = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            this.setState({
                posts: response.data
            });
        } catch (error) {
            console.log('error; ', error);
        }
    }

    servicioGetDos = () => {

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( response => {
            // handle success
            if(response.status == '200'){
                alert('FUE EXITOSO');
                this.setState({
                    posts: response.data
                });
            }else{
                alert('NO FUE EXITOSO');
            }
        })
        .catch( error => {
            // handle error
            console.log('ERROR: ', error);
            alert('HA OCURRIDO UN ERROR, INTENTA NUEVAMENTE');
        });
    }

    render(){
        return(
            <div>
                <h1>Servicios</h1>
                <Button onClick={this.servicioGet} variant="primary">
                    LLAMAR SERVICIO GET
                </Button>
                {
                    this.state.posts.map((item, i) => {
                        return(
                            <p key={i}>{item.title}</p>
                        )
                    })
                }
            </div>
        );
    }
}