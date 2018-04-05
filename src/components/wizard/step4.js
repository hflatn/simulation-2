import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Header  from '../header/Header.js';
import wiz from './wiz.css';
import step_active from '../../assets/step_active.png';
import step_inactive from '../../assets/step_inactive.png';
import step_completed from '../../assets/step_completed.png';
import { Link } from 'react-router-dom';
import { loanamount, monthlymortgage, cancel } from '../.././reducer.js';

 class step4 extends Component {

    render(){

        const { loanamount, monthlymortgage,
                loanAmountString, monthlyMortgageString, cancel } = this.props


        return(
            <div className ="whole-page">
            <Header/>
            
            <div className = "home-body">

                <div className = "add-cancel-container">
                    <span className = "add-list-text"> Add new listing </span>
                    <Link to="/dashboard">   <button className="cancel-list-button" onClick = {() => cancel()}> Cancel </button> </Link>
                </div>

      <div className = "step-container-title"> 
                    <span className = "font20"> Step 4 </span>
                    
                        <div className = "step-container">
                            <img src = { step_completed } alt = "step 1"/> 
                            <img src = { step_completed } alt = "step 2"/>
                            <img src = { step_completed } alt = "step 3"/>
                            <img src = { step_active } alt = "step 4"/>
                            <img src = { step_inactive } alt = "step 5"/>
                        </div>

                        <span className="step-4-label-container"> Loan Amount </span>
                        <input className="step-4-url" onChange = {(e) => loanamount(e.target.value)} value={loanAmountString}/>

                        <span className="step-4-label-container"> Monthly Mortgage </span>
                        <input className="step-4-url" onChange = {(e) => monthlymortgage(e.target.value)} value={monthlyMortgageString}/>

                        </div>




                            <div className = "step-container">
                            <Link to="/dashboard/3">   <button className = "button-next"> Previous Step </button> </Link>
                            <Link to="/dashboard/5">   <button className = "button-next"> Next Step </button> </Link>
                            </div>
                </div>
            
            </div>

        



        )
    }
}

function mapStateToProps(state) {
    if (!state) return {};
    const { loanAmountString, monthlyMortgageString } = state
    return {
        loanAmountString, monthlyMortgageString
    }
}

export default connect(mapStateToProps, { loanamount, monthlymortgage, cancel})(step4);