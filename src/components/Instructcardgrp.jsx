import React, { Component } from 'react';
import InstructorCard from './Instructcard';
import firstimg from '../../src/images/9.jpg'
import thirdimg from '../../src/images/10 (1).jpg'
import lastimg from '../../src/images/10.jpg'
import secondimg from '../../src/images/11.jpg'


export default class Instructcardgrp extends Component {
  render() {
    return (
      <section className="bg-primary px-4 pt-4 pb-5">
        <div className="container">
          <div className="text-center pb-4 text-light">
            <h2 className="pb-1 pt-2 fs-2">Our Instructors</h2>
            <p className="lead">Our Instructors all have 3+ years experience working as a web developer in the industry</p>
          </div>
          <div className="row gy-4 pb-2">

            <InstructorCard
              img={firstimg}
              name='Chiamaka Ogu'
            />
            <InstructorCard
              img={secondimg}
              name='Chinedu Ogu'
            />
            <InstructorCard
              img={thirdimg}
              name='Nsikan Ndiana'
            />
            <InstructorCard
              img={lastimg}
              name='Edidiong Kufre'
            />

          </div>
        </div>
      </section >
    );
  }
}