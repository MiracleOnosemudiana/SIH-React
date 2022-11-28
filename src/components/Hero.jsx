import React, { Component } from 'react';
import firstslide from '../../src/images/firstslide.svg'

export default class Hero extends Component {
    render() {
        return (
            <section id='top' className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
            <div className="container py-5">
              <div className="d-sm-flex justify-content-between align-items-center">
                <div>
                  <h1 className="py-2 ">Become a <span className="text-warning">Web Developer</span></h1>
                  <p className="lead py-1">
                    In 3 months we teach our students the latest fundamentals and
                    technologies to prepare them for future development roles
                  </p>
                  <button className="btn btn-primary btn-lg"> Get Enrolled</button>
                </div>
        
                <div>
                    
                  <img className="w-100 d-none d-sm-block" src={firstslide} alt=""/>
                </div>
              </div>
            </div>
          </section>
        );
}
}
