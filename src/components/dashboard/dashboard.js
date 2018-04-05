import React, { Component } from 'react';
import { connect } from 'react-redux';
import body from './body.css';
import Header from '../header/Header.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class dash extends Component {
    constructor() {
        super();
        this.state = {
            listinginfo: {
                img: null,
                propertyname: null,
                propertydescription: null,
                loan: null,
                monthly_mortgage: null,
                recommended_rent: null,
                desired_rent: null,
                address: null,
                city:null,
                state:null,
        
            }
        }
    }



    componentDidMount() {
            axios.get('/api/getlisting').then(res => {
                console.log(res.data, "getlisting information")
            })
        
    }


    render() {

        return (
            <div className="whole-page">

                <Header />

                <div className="home-body">
                    <Link to="/dashboard/1">  <button className="add-prop"> Add new property </button> </Link>

                    <div className="filter-container">
                        <span className="list-text"> List properties with "desired rent" greater than: $ </span>
                        <input className="filter-input" />
                        <button className="filter-button"> Filter </button>
                        <button className="reset-button"> Reset </button>
                    </div>

                    <div className="listing-title">
                        <span> Home Listings </span>
                    </div>

                    <div className="property-container">
                        <div className="property-image-container"> </div>
                        <div className="property-detail-container">  <div className="property-detail-child-container">
                            <div className="property-detail-2child-container">
                            </div>
                        </div>
                        </div>
                        <div className="property-money-info"> 
                        <div className="property-money-info-child">
                        </div>
                        </div>

                    </div>


                </div>

            </div>
        )
    }
}

