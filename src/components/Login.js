import React,{Component} from "react";
import fire from "./../utils/Firebase";

import Goals from "./Goals";

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email:"",
            password:"",
            isLoggedIn: false,
            isLoading:false
        }
    }

    formHandle(event) {
        event.preventDefault();
        this.setState({isLoading:true});
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then((user) => this.setState({isLoggedIn:true}))
        .catch(err => alert("Invalid credentials"));
    }

    handleInput = (input) => {
        this.setState({ [input.target.name]: input.target.value });
    };

    render() {
        return (
            !this.state.isLoggedIn?
                <div className="container" style={{height:"100vh"}}>
                    <div className="row h-100 justify-content-center align-items-center">
                        <form style={{border:"0.5px solid gray",padding:"20px"}} onSubmit={(event) => this.formHandle(event)}>
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => this.handleInput(event)} placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" name="password" onChange={(event) => this.handleInput(event)} id="exampleInputPassword1" placeholder="Password"/>
                        </div>
        <button type="submit" className="btn btn-primary">{this.state.isLoading?<div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>:<h5>Submit</h5>}</button>
                        </form>
                    </div>
                </div>
            :
                <Goals/>
        )
    }
}

export default Login;