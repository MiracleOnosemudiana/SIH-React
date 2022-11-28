import React, { Component } from 'react';
import '../CSS/Newsletter.css'

export default class Newsletter extends Component {
    render() {
        return (
            <section className="bg-primary text-light p-5">
                <div className="container">
                    <div className="d-md-flex justify-content-between  align-items-center">
                        <h3 className="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Enter Email" aria-label="Email"
                                aria-describedby="button-addon2" />
                            <button className="btn btn-outline-dark btn-lg bg-dark text-light" type="button" id="button-addon2">Enter</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}