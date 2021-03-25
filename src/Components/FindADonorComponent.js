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
                    <CardImg top src={donor.image} alt={donor.name} />
                    <CardBody>
                        <CardTitle>{donor.name}</CardTitle>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }
    render() {
        const findadonor = this.props.donors.map(donor => {
            return (
                <div key={donor.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onDonorSelect(donor)}>
                        <CardImg width="100%" src={donor.image} alt={donor.name} />
                        <CardImgOverlay>
                            <CardTitle>{donor.name}</CardTitle>
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