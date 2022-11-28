import React, { Component } from 'react';
import Contactinfo from '../components/Contactinfo';
import Faq from '../components/Faq';
import Fundamental from '../components/Fundamentals';
import Hero from '../components/Hero';
import Instructcardgrp from '../components/Instructcardgrp';
import Learnwebdev from '../components/Learnwebdev';
import Footer from '../components/Footer';
import ExampleNav from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Section from '../components/Section';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div style={{ position: 'fixed', width: '100%', zIndex: '100' }}>
          < ExampleNav />
        </div>
        <Hero />
        <Newsletter />
        <Section />
        <Fundamental />
        <Learnwebdev />
        <Faq />
        <Instructcardgrp />
        <Contactinfo />
        <Footer />
      </div>
    );
  }
}
