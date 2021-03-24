import React, {Component} from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

const MyMapComponent = ({ text }) => <div>{text}</div>;

class About extends Component {
    static defaultProps = {
        center: {
            lat: 41.8781,
            lng: -87.6298
        },
        zoom: 8
    };

    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col text-center my-3">
                    <p>Ipsum cillum laboris velit velit enim Lorem laboris aliqua. Proident consectetur irure anim mollit aute minim. Et proident elit sint reprehenderit non quis tempor magna reprehenderit. Aute sunt proident pariatur consectetur laborum pariatur dolor. Pariatur ullamco aute laboris adipisicing dolore quis. Ex consequat pariatur nulla nostrud amet tempor ut officia ea adipisicing occaecat eu enim excepteur.</p>
                    <Button className="homebtn">Mission</Button>
                </div>
            </div>
            <div className="row">
                <div className="col text-center my-3" style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyBcmSxBHCXBZXMjKwR-rlIFQy_RcCjDQPc"}}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        >
                        <MyMapComponent
                            lat={41.8781}
                            lng={-87.6298}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                    <Button className="homebtn"> Location</Button>
                </div>
            </div>
            <div className="row">
                <div className="col text-center my-3">
                    <p>Irure dolore aliquip esse minim tempor proident fugiat irure. Nisi elit do sit ad tempor do exercitation. Ea reprehenderit consequat quis mollit magna minim voluptate. Veniam ea velit ad veniam eu velit fugiat. Minim et Lorem aliqua velit. Nostrud aute proident nisi laborum eiusmod duis duis do incididunt officia.</p>
                    <Button className="homebtn"> Contact Us</Button>
                </div>
            </div>
        </div>
        );
    };
}

export default About;