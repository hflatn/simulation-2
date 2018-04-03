import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../header/Header.js';
import wiz from './wiz.css';
import step_active from '../../assets/step_active.png';
import step_inactive from '../../assets/step_inactive.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { nameupdate, descriptionupdate } from '../.././reducer.js';

class step1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propertyname: '',
            propertydescription: '',
        }
        this.handlename = this.handlename.bind(this);
        this.handledescription = this.handledescription.bind(this)
    }

    componentDidMount() {
        this.setState({
            propertyname: this.props.nameupdate,
            propdescription: this.props.descriptionupdate
        })
    }


    handlename(e) {
        let input = e.target.value
        this.setState({
            propertyname: input
        })
    }

    handledescription(e) {
        let input = e.target.value
        this.setState({
            propertydescription: input
        })
    }

    render() {

        const { nameupdate, descriptionupdate, nameupdatestring } = this.props


        console.log(nameupdatestring, "namestring info")

        return (
            <div className="whole-page">
                <Header />

                <div className="home-body">

                    <div className="add-cancel-container">
                        <span className="add-list-text"> Add new listing </span>
                        <button className="cancel-list-button"> Cancel </button>
                    </div>

                    <div className="step-container-title">
                        <span className="font20"> Step 1 </span>

                        <div className="step-container">
                            <img src={step_active} alt="Step 1" />
                            <img src={step_inactive} alt="Step 2" />
                            <img src={step_inactive} alt="Step 3" />
                            <img src={step_inactive} alt="Step 4" />
                            <img src={step_inactive} alt="Step 5" />
                        </div>

                    </div>

                    <div className="step-1-label-container">
                        <span className="label-info"> Property Name </span>

                        <input className="step-1-input" onChange={(e) => nameupdate(e.target.value)} value={this.props.nameupdatestring} />
                        <span className="label-info"> Property Description </span>
                        <textarea className="step-1-input" onChange={(e) => descriptionupdate(e.target.value)} value={this.props.descriptionupdatestring} />
                        <Link to="/dashboard/2"> <button className="button-next"> Next Step</button> </Link>
                    </div>

                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    if (!state) return {};
    const { nameupdatestring, descriptionupdatestring } = state;
    return {
        nameupdatestring, descriptionupdatestring
    }
}

export default connect(mapStateToProps, { nameupdate, descriptionupdate })(step1);