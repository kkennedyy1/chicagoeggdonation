import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import FindADonor from './FindADonorComponent';
import Forms from './FormComponent';
import Footer from './FooterComponent';
import { DONORS } from '../shared/Donors';
import { FAMILYPICS } from '../shared/Carousel';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            donors: DONORS,
            familypics: FAMILYPICS
        };
    }

    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' render={() => <Home family={this.state.familypics} />} />
                    <Route exact path='/aboutus' component={About} />
                    <Route path='/findadonor' render={() => <FindADonor donor={this.state.donors} />} />
                    <Route exact path='/forms' component={Forms} />
                    <Redirect to='/home' />  
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;