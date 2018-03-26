import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Header  from '../header/Header.js';
import wiz from './wiz.css';
import step_active from '../../assets/step_active.png';
import step_inactive from '../../assets/step_inactive.png';
import step_completed from '../../assets/step_completed.png';

export default class step2 extends Component {
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
                        <span className = "font20"> Step 2 </span>
                        
                            <div className = "step-container">
                                <img src = { step_completed } alt = "Step 1"/> 
                                <img src = { step_active } alt = "Step 2"/>
                                <img src = { step_inactive } alt = "Step 3"/>
                                <img src = { step_inactive } alt = "Step 4"/>
                                <img src = { step_inactive } alt = "Step 5"/>
                            </div>

                            <div className = "step-2-label-container">
                                <span className = "label-info"> Address </span>
                                <input className = "step-1-input"/>

                                <div className = "step-2-cs-container">
                                    
                                    <div className = "step-2-c-s-container">
                                        <span className = "label-info"> City </span>
                                        <input className = "step-2-csz-container"/>
                                    </div>

                                    <div className = "step-2-c-s-container">
                                        <span className = "label-info"> Zip </span>
                                        <input className = "step-2-csz-container"/>
                                    </div>

                                </div>
                                
                                <div className = "step-2-z-container">

                                    <div className = "step-2-c-s-container">
                                        <span className = "label-info"> Zip </span>
                                        <input className = "step-2-csz-container"/>
                                    </div>
                                    
                                </div> 
                                
                                <div className = "step-container">

                                    <button className = "button-next"> Previous Step </button>
                                    <button className = "button-next"> Next Step </button>

                                </div>

                            </div>
                  
                    </div>
                
                </div>

            </div>
        )
    }
}
