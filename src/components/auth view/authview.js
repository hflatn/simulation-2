import React, { Component } from 'react';
import { connect } from 'react-redux';
import auth from "./auth.css";
import auth_logo from '../../assets/auth_logo.png';
import axios from 'axios';
import  { logging, passy, updatewrong } from '../.././reducer.js';

class login extends Component {
    

    registerUser(){
        let body = { username: this.state.username, password: this.state.password}
        console.log(body, "whats body?")
    axios.post('/api/registeruser', body).then (res => {
        console.log( res.data, "res.datainfo" )
        this.props.history.push(`/dashboard`)
    })
    }

    loginUser(){
        let body = {
            username: this.state.username,
            password: this.state.password}
        axios.post('/api/loginuser', body).then (res => {
            if(res.data[0].username) {
                this.props.history.push(`/dashboard`)
            } 
            else
             {
                this.setState({
                    wrong: "Wrong username or password."
                })
            }
            console.log(res.data, "res login info")

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

        const { logging, passy, wrong} = this.props;

  


        return(
        <div className="sideslogin">
            <div className="lin">
            <img class="logo" src={auth_logo} />
           
            <span class="auth-text"> Username </span>
                <input class="auth-input" onChange={(e) => this.handleusername(e) } />
            <span class="auth-text"> Password </span>
                <input type="password" class="auth-input" onChange={(e) => this.handlepassword(e) } /> 
                
                <div>
                    <button className="auth-login" onClick={() => this.loginUser()}> Login </button>  
                    <button className="auth-register" onClick={() => this.registerUser()}> Register </button>
                </div>
                  
                    <span className="wrong">
                        {this.props.wrong}
                    </span>
            </div>
        </div>
        )
    }
}

function mapStateToProps( state ) {
    return state;
}


export default connect( mapStateToProps, { logging, passy, updatewrong} ) (login);


