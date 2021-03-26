import React, { Component } from 'react';
import { Card, CardBody, CardText, CardImg, CardImgOverlay, CardTitle  } from 'reactstrap';
import { Link } from 'react-router-dom';

class FindADonor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDonor: null
        };
    }

    onDonorSelect(donor) {
        this.setState({selectedDonor: donor});
    }

    renderSelectedDonor(donor) {
        if (donor) {
            return (
                <Card>                    
                    <CardBody>
                        <CardTitle><h4>{donor.name}</h4></CardTitle>
                        <CardImg top src={donor.image} alt={donor.name} />
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }
    render() {
        const findadonor = this.props.donor.map(donor => {
            return (
                <div key={donor.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onDonorSelect(donor)}>
                        <CardImg width="100%" src={donor.image} alt={donor.name} />
                        <CardImgOverlay>
                            <CardTitle><h4>{donor.name}</h4></CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {findadonor}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedDonor(this.state.selectedDonor)}
                    </div>
                </div>
            </div>
        );
    }
}

export default FindADonor;