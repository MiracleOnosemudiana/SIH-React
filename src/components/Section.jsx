import React, { Component } from 'react';
import Card from './Card';

export default class Section extends Component {
    render() {
        return (
       <div className='p-5'>
         <div className='container'>
               <div className='row'>
                  <div className='col-md-4 mb-4'>
                    <Card 
                    color = 'dark'
                    icon =  {<i className="fa fa-laptop fa-3x icon-size py-1" aria-hidden="true"></i>}
                    title ='Virtual'
                    />
                  </div>
                  <div className='col-md-4 mb-4'>
                    <Card 
                    color = 'secondary'
                    icon =  {<i className="fa fa-user fa-3x icon-size pt-1 px-1 " aria-hidden="true" style= {{border:'2px solid white'}}></i>}
                    title ='Hybrid'
                    />
                  </div>
                  <div className='col-md-4 mb-4'>
                    <Card 
                    color = 'dark'
                    icon =  {<i className="fa fa-users fa-3x icon-size py-1" aria-hidden="true"></i>}
                    title ='In person'
                    />
                  </div>
               </div>
         </div>
       </div>

        );
    }
}