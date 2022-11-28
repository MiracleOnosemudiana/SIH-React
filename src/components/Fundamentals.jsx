import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import secondslide from '../../src/images/secondslide.svg'


export default class Fundamental extends Component {
    render() {
      return (
        <section className="p-5">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-md">

          <img className="img-fluid" src={secondslide} alt=""/>

        </div>
        <div className="col-md p-5">
          <h2>Learn The Fundamentals</h2>
          <div className="pt-1 pb-2">
            <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa voluptate, cupiditate
              corrupti temporibus blanditiis nobis.</p>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veniam ad nemo repellendus architecto
              corporis impedit est animi doloremque. Eos quisquam, nihil laboriosam ad beatae laudantium quos
              perspiciatis repudiandae impedit.</p>
          </div>
          <Button href="#" className="btn btn-light"> <i className="fa fa-angle-right" aria-hidden="true"></i>  Read more</Button>


        </div>
      </div>
    </div>
  </section>
      );
    }
}