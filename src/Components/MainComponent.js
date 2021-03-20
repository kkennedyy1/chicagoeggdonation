import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
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
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/aboutus' component={About} />
                    <Route exact path='/forms' component={Forms} />
                    <Redirect to='/home' />  
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;