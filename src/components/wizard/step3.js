import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Header  from '../header/Header.js';
import wiz from './wiz.css';
import step_active from '../../assets/step_active.png';
import step_inactive from '../../assets/step_inactive.png';
import step_completed from '../../assets/step_completed.png';
import header_logo from '../../assets/header_logo.png';

export default class step3 extends Component {
    constructor() {
        super();
        this.state = {

        }
    }




    render(){

    


        return(
            <div className ="whole-page">
            <Header/>
            
            <div className = "dash-body">

                <div className = "add-cancel-container">
                    <span className = "add-list-text"> Add new listing </span>
                    <button className = "cancel-list-button"> Cancel </button>
                </div>

                <div className = "step-container-title"> 
                    <span className = "font20"> Step 3 </span>
                    
                        <div className = "step-container">
                            <img src = { step_completed } alt = "step 1"/> 
                            <img src = { step_completed } alt = "step 2"/>
                            <img src = { step_active } alt = "step 3"/>
                            <img src = { step_inactive } alt = "step 4"/>
                            <img src = { step_inactive } alt = "step 5"/>
                        </div>

                        <div className = "step-3-image-container">
                            <img className = "step-3-image" src = { header_logo }  alt="Preview" />
                        </div>

                        <span className = "step-3-url-title"> Image Url </span>
                                <input className = "step-3-url"/>
                            
                            <div className = "step-container">
                                <button className = "button-next"> Previous Step </button>
                                <button className = "button-next"> Next Step </button>
                            </div>
                </div>
            
            </div>

        </div>



        )
    }
}