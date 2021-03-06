import React from 'react';
import { Button, UncontrolledCarousel } from 'reactstrap';
import { Link } from 'react-router-dom';


function Home({family}) {
    if(family){
    return (
        <div className="container">
            <div className="row my-3 d-block">
                <UncontrolledCarousel className="w-50 mx-auto mycarousel" items={family}/>
            </div>
            <div className="row">
                <div className="col text-center my-3 homeabout">
                    <p>Aliquip anim occaecat irure elit ullamco velit culpa culpa nostrud adipisicing. Eiusmod culpa voluptate eiusmod minim dolor ex duis enim et cillum veniam. Veniam velit dolor velit pariatur occaecat culpa.</p>
                    <Link to="/aboutus">
                        <Button className="homebtn"> About Us</Button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 text-center my-3 homefind">
                    <p>Ipsum cillum laboris velit velit enim Lorem laboris aliqua. Proident consectetur irure anim mollit aute minim. Et proident elit sint reprehenderit non quis tempor magna reprehenderit. Aute sunt proident pariatur consectetur laborum pariatur dolor. Pariatur ullamco aute laboris adipisicing dolore quis. Ex consequat pariatur nulla nostrud amet tempor ut officia ea adipisicing occaecat eu enim excepteur.</p>
                    <Link to="/findadonor">
                        <Button className="homebtn">Find a Donor</Button>
                    </Link>
                </div>
                <div className="col-md-6 text-center my-3 homebecome">
                    <p>Ut adipisicing esse cupidatat culpa sint labore aliqua. Voluptate incididunt magna do duis. Anim excepteur quis enim exercitation aliqua consectetur labore ipsum excepteur. Deserunt ullamco dolor incididunt eiusmod. Velit incididunt ea Lorem esse nostrud nulla aliquip ad pariatur.</p>
                    <Link to="/forms">
                        <Button className="homebtn"> Become a Donor</Button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col text-center my-3 homecontact">
                    <p>Irure dolore aliquip esse minim tempor proident fugiat irure. Nisi elit do sit ad tempor do exercitation. Ea reprehenderit consequat quis mollit magna minim voluptate. Veniam ea velit ad veniam eu velit fugiat. Minim et Lorem aliqua velit. Nostrud aute proident nisi laborum eiusmod duis duis do incididunt officia.</p>
                    <Link to="/forms">
                        <Button className="homebtn"> Contact Us</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
    }
}

export default Home;