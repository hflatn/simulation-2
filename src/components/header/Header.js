import React, { Component } from 'react';
import { connect } from 'react-redux';
import top from './top.css';
import header_logo from '../../assets/header_logo.png'
import axios from 'axios';
import { Link }from 'react-router-dom';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {

        }
    }



    
        logout(){
        axios.get('/api/signout').then (res => {
        
        })
        }

    render(){


        return(
          
            
                <div className="top-bar">
                    <img src={ header_logo } />
                    <span className = "dash-title"> Houser Dashboard </span>
                 <Link to="/">   <span className = "logout-button" onClick={() => this.logout()}> Logout </span> </Link>
                </div>

        )
    }
}
