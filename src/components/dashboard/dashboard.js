import React, { Component } from 'react';
import { connect } from 'react-redux';
import body from './body.css';
import  Header  from '../header/Header.js';

export default class dash extends Component {
    constructor() {
        super();
        this.state = {

        }
    }




    render(){

    


        return(
            <div className="whole-page">
            
                
                <Header />
              
              
                <div className="dash-body">
                    <button className="add-prop"> Add new property </button> 

                    <div className="filter-container">
                         <span className="list-text"> List properties with "desired rent" greater than: $ </span>
                         <input />
                     </div>
                    
                    <div className="listing-title"> 
                    <span> Home Listings </span>
                    </div>
    
                </div>

             </div>
        )
    }
}