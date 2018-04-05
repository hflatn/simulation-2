import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Header  from '../header/Header.js';
import wiz from './wiz.css';
import step_active from '../../assets/step_active.png';
import step_inactive from '../../assets/step_inactive.png';
import step_completed from '../../assets/step_completed.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { desiredrent, cancel } from '../.././reducer.js';

class step5 extends Component {
   constructor(props){
       super(props)
       this.createListing = this.createListing.bind(this);
   }


componentDidMount(){
   console.log(this.props, "propsinfo")

}

createListing(){
    const { desiredRentString, nameupdatestring, descriptionupdatestring, addressString, cityString, stateString,
        zipString, imgUrl, loanAmountString, monthlyMortgageString} = this.props

    let body = { nameupdatestring, descriptionupdatestring,  cityString, stateString, 
    zipString, imgUrl, loanAmountString, monthlyMortgageString, desiredRentString }
    axios.post('/api/createListing', body).then ( res => {

    })
}
//description string, citystring,imgurl,loandamountstrig


    render(){

        const { desiredrent, desiredRentString, nameupdatestring, descriptionupdatestring, addressString, cityString, stateString,
            zipString, imgUrl, loanAmountString, monthlyMortgageString, cancel} = this.props

        return(
            <div className ="whole-page">
            <Header/>
            
            <div className = "home-body">

                <div className = "add-cancel-container">
                    <span className = "add-list-text"> Add new listing </span>
                    <Link to="/dashboard">   <button className="cancel-list-button" onClick = {() => cancel()}> Cancel </button> </Link>
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
                            <Link to="/dashboard">    <button className = "step-5-complete" onClick={() => this.createListing()}> Complete </button> </Link>
                            </div>
                </div>
            
            </div>

        )
    }
}

function mapStateToProps(state) {
    if (!state) return {};
    const { nameupdatestring, descriptionupdatestring, addressString, cityString, stateString, 
        zipString, imgUrl, loanAmountString, monthlyMortgageString, desiredRentString } = state;
    return {
        nameupdatestring, descriptionupdatestring, addressString, cityString, stateString, 
    zipString, imgUrl, loanAmountString, monthlyMortgageString, desiredRentString
    }
}

export default connect(mapStateToProps, { desiredrent, cancel })(step5);