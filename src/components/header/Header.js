import React, { Component } from 'react';
import { connect } from 'react-redux';
import top from './top.css';
import header_logo from '../../assets/header_logo.png'

export default class Header extends Component {
    constructor() {
        super();
        this.state = {

        }
    }




    render(){

    


        return(
          
            
                <div className="top-bar">
                    <img src={ header_logo } />
                    <span className = "dash-title"> Houser Dashboard </span>
                    <span className = "logout-button"> Logout </span>
                </div>


          
        )
    }
}