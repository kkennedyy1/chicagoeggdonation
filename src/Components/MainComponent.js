import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Forms from './FormComponent';
import { DONORS } from '../shared/Donors';
import { render } from 'react-dom';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            donors: DONORS
        };
    }

    render() {
        return(
            <div>
                <Header />
                <Home />
                <Forms />
                <Footer />
            </div>
        );
    }
}

export default Main;