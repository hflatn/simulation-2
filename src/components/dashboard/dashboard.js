import React, { Component } from 'react';
import { connect } from 'react-redux';
import body from './body.css';
import  Header  from '../header/Header.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class dash extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount () {
        console.log("componentdidmount")
        axios.get('/api/getsession').then ( res => {
            console.log(res.data, "session information")
        })
    }


    render(){

        return(
            <div className="whole-page">
            
                <Header />
              
                <div className="home-body">
                  <Link to="/dashboard/1">  <button className="add-prop"> Add new property </button> </Link>

                    <div className="filter-container">
                         <span className="list-text"> List properties with "desired rent" greater than: $ </span>
                         <input className="filter-input"/>
                         <button className="filter-button"> Filter </button>
                         <button className="reset-button"> Reset </button>
                     </div>
                    
                    <div className="listing-title"> 
                    <span> Home Listings </span>
                    </div>
    
                </div>

             </div>
        )
    }
}

