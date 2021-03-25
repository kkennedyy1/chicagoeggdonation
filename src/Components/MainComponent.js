import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import FindADonor from './FindADonorComponent';
import Forms from './FormComponent';
import Footer from './FooterComponent';
import { DONORS } from '../shared/donors';
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
                    <Route path='/findadonor' render={() => <FindADonor donors={this.props.donors} />} />
                    <Route exact path='/forms' component={Forms} />
                    <Redirect to='/home' />  
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;