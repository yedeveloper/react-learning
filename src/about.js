import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

export default class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    goHome = () => {
        const {history} = this.props;
        history.push('/');
    }

    render(){
        return(
            <>
            <main>
                <h2>Who are we?</h2>
                <p>
                That feels like an existential question, don't you
                think?
                </p>
            </main>
            <nav>
                <Link to="/">
                    <Button variant="primary">Ir al home</Button>
                </Link>
            </nav>
            
            </>
        )
    }
}