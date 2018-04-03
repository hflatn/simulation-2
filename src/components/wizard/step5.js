import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Header  from '../header/Header.js';
import wiz from './wiz.css';
import step_active from '../../assets/step_active.png';
import step_inactive from '../../assets/step_inactive.png';
import step_completed from '../../assets/step_completed.png';
import { Link } from 'react-router-dom';
import { desiredrent } from '../.././reducer.js';

class step5 extends Component {
   
    render(){

    const { desiredrent, desiredRentString } = this.props

        return(
            <div className ="whole-page">
            <Header/>
            
            <div className = "home-body">

                <div className = "add-cancel-container">
                    <span className = "add-list-text"> Add new listing </span>
                    <button className = "cancel-list-button"> Cancel </button>
                </div>

      <div className = "step-container-title"> 
                    <span className = "font20"> Step 5 </span>
                    
                        <div className = "step-container">
                            <img src = { step_completed } alt = "step 1"/> 
                            <img src = { step_completed } alt = "step 2"/>
                            <img src = { step_completed } alt = "step 3"/>
                            <img src = { step_completed } alt = "step 4"/>
                            <img src = { step_active } alt = "step 5"/>
                        </div>

                        <span className="step-5-rec-rent"> Recommended Rent $ </span>

                        <span className="step-4-label-container"> Desired Rent </span>
                        <input className="step-4-url" onChange = {(e) => desiredrent(e.target.value)} value = {desiredRentString} />

                    

                        </div>




                            <div className = "step-container">
                            <Link to="/dashboard/4">  <button className = "button-next"> Previous Step </button> </Link>
                            <Link to="/dashboard">    <button className = "step-5-complete"> Complete </button> </Link>
                            </div>
                </div>
            
            </div>

        )
    }
}

function mapStateToProps(state) {
    if (!state) return {};
    const { desiredRentString } = state;
    return {
        desiredRentString
    }
}

export default connect(mapStateToProps, { desiredrent })(step5);