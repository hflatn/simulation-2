import React, { Component } from 'react';
import { connect } from 'react-redux';
import auth from "./auth.css";
import auth_logo from '../../assets/auth_logo.png'
import axios from 'axios';

export default class login extends Component {
    constructor() {
        super();
        this.state = {
            username: [],
            password: []
        }
    }

    registerUser(){
        let body = { username: this.state.username, password: this.state.password}
        console.log(body, "whats body?")
    axios.post('/api/registeruser', body).then (res => {
        console.log( res.data, "res.datainfo" )
    })
    }

    loginUser(){
        axios.get('/api/getuser').then (res => {
            console.log( res.data )
        })
    }

    handleusername(e){
        let input = e.target.value
        this.setState({
            username: input
        })
    }

    handlepassword(e){
        let input = e.target.value
        this.setState({
            password: input
        })
    }


    render(){

    console.log(this.state.username,"username info")


        return(
        <div className="sideslogin">
            <div className="lin">
            <img class="logo" src={auth_logo} />
           
            <span class="auth-text"> Username </span>
                <input class="auth-input" onChange={(e) => this.handleusername(e) } />
            <span class="auth-text"> Password </span>
                <input class="auth-input" onChange={(e) => this.handlepassword(e) } /> 
                
                <div>
                    <button className="auth-login" onClick={() => this.loginUser()}> Login </button>  
                    <button className="auth-register" onClick={() => this.registerUser()}> Register </button>
                </div>


            </div>
        </div>
        )
    }
}