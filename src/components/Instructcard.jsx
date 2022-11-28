import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class InstructorCard extends Component {
    render() {
        return (
            <div className="col-md-6 col-lg-3">
                <div className="card">
                    <div className="card-body text-center">
                        <img src={this.props.img} alt="" className="rounded-circle mb-3"/>
                            <h3 className="card-title mb-2 pt-1">{this.props.name}</h3>
                            <p className="card-text mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure architecto sequi
                                molestiae assumenda eaque.
                            </p>
                            <Button variant="link"><i className="fa fa-twitter text-dark" aria-hidden="true"></i></Button>
                            <Button variant="link"><i className="fa fa-facebook-square  text-dark" aria-hidden="true"></i></Button>
                            <Button variant="link"><i className="fa fa-instagram  text-dark" aria-hidden="true"></i></Button>
                            <Button variant="link"><i className="fa fa-linkedin-square  text-dark" aria-hidden="true"></i></Button>
                    </div>
                </div>
            </div>
        );
    }
}