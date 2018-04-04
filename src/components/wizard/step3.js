import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../header/Header.js';
import wiz from './wiz.css';
import step_active from '../../assets/step_active.png';
import step_inactive from '../../assets/step_inactive.png';
import step_completed from '../../assets/step_completed.png';
import header_logo from '../../assets/header_logo.png';
import { Link } from 'react-router-dom';
import { img } from '../.././reducer.js';

class step3 extends Component {
    constructor(props){
        super(props)
     
    }
    componentDidMount(){
    
        console.log(this.props, "this.props value")
    }

    render() {

        const { img, imgUrl } = this.props


        return (
            <div className="whole-page">
                <Header />

                <div className="home-body">

                    <div className="add-cancel-container">
                        <span className="add-list-text"> Add new listing </span>
                        <button className="cancel-list-button"> Cancel </button>
                    </div>

                    <div className="step-container-title">
                        <span className="font20"> Step 3 </span>

                        <div className="step-container">
                            <img src={step_completed} alt="step 1" />
                            <img src={step_completed} alt="step 2" />
                            <img src={step_active} alt="step 3" />
                            <img src={step_inactive} alt="step 4" />
                            <img src={step_inactive} alt="step 5" />
                        </div>

                        <div className="step-3-image-container">
                            {imgUrl == null ?
                               
                                <img
                                    src={header_logo}
                                    alt="Preview" /> 
                                    :
                                <img
                                    src={imgUrl}
                                    alt="Preview" />
                            }
                        </div>

                        <span className="step-3-url-title"> Image Url </span>
                        <input className="step-3-url" onChange={(e) => img(e.target.value)} value={imgUrl} />

                        <div className="step-container">
                            <Link to="/dashboard/2">  <button className="button-next"> Previous Step </button> </Link>
                            <Link to="/dashboard/4">  <button className="button-next"> Next Step </button> </Link>
                        </div>

                    </div>

                </div>

            </div>



        )
    }
}

function mapStateToProps(state) {
    if (!state)
        return {}
    const { imgUrl, addressString, cityString, stateString, zipString } = state;
    return {
        imgUrl, addressString, cityString, stateString, zipString
    }
}

export default connect(mapStateToProps, { img })(step3);