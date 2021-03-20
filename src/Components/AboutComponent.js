import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center my-3 homefind">
                    <p>Ipsum cillum laboris velit velit enim Lorem laboris aliqua. Proident consectetur irure anim mollit aute minim. Et proident elit sint reprehenderit non quis tempor magna reprehenderit. Aute sunt proident pariatur consectetur laborum pariatur dolor. Pariatur ullamco aute laboris adipisicing dolore quis. Ex consequat pariatur nulla nostrud amet tempor ut officia ea adipisicing occaecat eu enim excepteur.</p>
                    <Button className="homebtn">Mission</Button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 text-center my-3 homebecome">
                    <p>Ut adipisicing esse cupidatat culpa sint labore aliqua. Voluptate incididunt magna do duis. Anim excepteur quis enim exercitation aliqua consectetur labore ipsum excepteur. Deserunt ullamco dolor incididunt eiusmod. Velit incididunt ea Lorem esse nostrud nulla aliquip ad pariatur.</p>
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
}

export default About;