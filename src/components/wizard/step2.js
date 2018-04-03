import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Header  from '../header/Header.js';
import wiz from './wiz.css';
import step_active from '../../assets/step_active.png';
import step_inactive from '../../assets/step_inactive.png';
import step_completed from '../../assets/step_completed.png';
import { Link } from 'react-router-dom';
import { nameupdate, descriptionupdate } from '../.././reducer.js';

 class step2 extends Component {
 
componentDidMount(){
    console.log(this.props.nameupdatestring, this.props.descriptionupdatestring, "nameupate props")
    console.log(this.props, "this.props value")
}


    render(){

        const { nameupdate, propertydescription} = this.props;
        


        return(
            <div className ="whole-page">
                <Header/>
                
                <div className = "home-body">

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

                                  <Link to="/dashboard/1">  <button className = "button-next"> Previous Step </button> </Link>
                                  <Link to="/dashboard/3">  <button className = "button-next"> Next Step </button> </Link>

                                </div>

                            </div>
                  
                    </div>
                
                </div>

            </div>
        )
    }
}

function mapStateToProps( state ) {

return state

}

export default connect( mapStateToProps, {nameupdate, descriptionupdate} ) (step2);