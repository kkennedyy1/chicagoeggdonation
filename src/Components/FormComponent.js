import React, { Component }  from 'react';
import {
    Button, Form, FormGroup, Label, Input, Col
} from 'reactstrap';

class Forms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(firstName, lastName, phoneNum, email) {

        const errors = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: ''
        };

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = 'First name must be at least 2 characters.';
            } else if (firstName.length > 15) {
                errors.firstName = 'First name must be 15 or less characters.';
            }
        }

        if (this.state.touched.lastName) {
            if (lastName.length < 2) {
                errors.lastName = 'Last name must be at least 2 characters.';
            } else if (lastName.length > 15) {
                errors.lastName = 'Last name must be 15 or less characters.';
            }
        }

        const reg = /^\d+$/;
        if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
            errors.phoneNum = 'The phone number should contain only numbers.';
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = 'Email should contain a @';
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render(){
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email);    
        return (
            <div className="row row-content justify-content-center">
                <div className="col-12 text-center">
                    <h2>Let's get you started!</h2>
                    <hr />
                </div>
                <div className="col-8 col-lg-6">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="firstName" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input type="text" id="firstName" name="firstName"
                                    placeholder="First Name"
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange}
                                    invalid={errors.firstName}
                                    onBlur={this.handleBlur("firstName")} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastName" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input type="text" id="lastName" name="lastName"
                                    placeholder="Last Name"
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange}
                                    invalid={errors.lastName}
                                    onBlur={this.handleBlur("lastName")}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="phoneNum" md={2}>Phone</Label>
                            <Col md={10}>
                                <Input type="tel" id="phoneNum" name="phoneNum"
                                    placeholder="Phone number"
                                    value={this.state.phoneNum}
                                    onChange={this.handleInputChange} 
                                    invalid={errors.phoneNum}
                                    onBlur={this.handleBlur("phoneNum")}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input type="email" id="email" name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    invalid={errors.email}
                                    onBlur={this.handleBlur("email")}/> 
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="registerAs" md={2}>Register as</Label>
                            <Col md={4}>
                                <Input type="select" name="contactType"
                                    value={this.state.contactType}
                                    onChange={this.handleInputChange}>
                                    <option disabled> Select "egg donor" or "searching for a donor"</option>
                                    <option>egg donor</option>
                                    <option>searching for egg donor</option>
                                </Input>
                                <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {' '}
                                            <strong>Background</strong>
                                        </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="primary" className="float:center">
                                    Submit
                            </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Forms;