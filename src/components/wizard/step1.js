import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Header  from '../header/Header.js';
import wiz from './wiz.css';
import step_active from '../../assets/step_active.png';
import step_inactive from '../../assets/step_inactive.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { propname, propdescription } from '../.././reducer.js';

class step1 extends Component {
   
submit(){
    let body = {
        propertyname: this.state.propertyname,
        propertydescription: this.state.propertydescription
    }
        console.log( this.props.propertydescription, "property description props")
        console.log( this.props.propertyname, "property name props")
   
}

handlename(e){
    let input = e.target.value
    this.setState({
        propertyname: input
    })
}

handledescription(e){
    let input = e.target.value
    this.setState({
        propertydescription: input
    })
}

    render(){

    


        return(
            <div className ="whole-page">
            <Header/>
                
                <div className = "home-body">

                    <div className = "add-cancel-container">
                        <span className = "add-list-text"> Add new listing </span>
                        <button className = "cancel-list-button"> Cancel </button>
                    </div>

                    <div className = "step-container-title"> 
                        <span className = "font20"> Step 1 </span>
                        
                            <div className = "step-container">
                                <img src = { step_active } alt = "Step 1"/> 
                                <img src = { step_inactive } alt = "Step 2"/>
                                <img src = { step_inactive } alt = "Step 3"/>
                                <img src = { step_inactive } alt = "Step 4"/>
                                <img src = { step_inactive } alt = "Step 5"/>
                            </div>
                            
                    </div>

                    <div className = "step-1-label-container">
                        <span className = "label-info"> Property Name </span>
                        <input className = "step-1-input" onChange={(e) => this.handlename(e)}/>
                        <span className = "label-info"> Property Description </span> 
                        <textarea className = "step-1-input" onChange={(e) => this.handledescription(e) }/>
                       <Link to="/dashboard/2"> <button className="button-next" onClick={() => this.submit()}> Next Step</button> </Link>
                    </div>

                </div>
                
             </div>
        )
    }
}

function mapStateToProps( state ) {
    return state;
}

export default connect( mapStateToProps, {propname,} ) (step1);