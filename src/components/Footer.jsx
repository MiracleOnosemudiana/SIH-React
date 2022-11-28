import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class Footer extends Component {
    render() {
        return (
            <section className="bg-dark pt-5 pb-5 mt-5">
                <div className="container position-relative pt-3">
                    <p className="lead text-light text-center">
                        copyright © 2022 SIH training
                    </p>
                    <Button variant="link" href='#top' style={{
                        position: 'absolute',
                        right: '50px',
                        top: '40px'}}>
                        <i className="fa fa-arrow-circle-o-up fa-3x text-primary position-absolute" aria-hidden="true"></i>
                    </Button>
                </div>
            </section>
        );
    }
}