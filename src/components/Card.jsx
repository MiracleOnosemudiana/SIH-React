import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


export default class Card extends Component {
    render() {
        return (
            <div className={`card bg-${this.props.color} text-light text-center`}>
                <div className="card-body">
                   <div>{this.props.icon}</div>
                    <h3 className="card-title py-2">{this.props.title}</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, rerum dolores illum
                        obcaecati minima magni!</p>
                        <Button href="#" className="btn btn-primary">Read More</Button>
                </div>
            </div>
        );
    }
}