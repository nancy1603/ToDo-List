import React, { Component } from "react";
import { signUp } from "../../actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import logOutImg from "../../logout.svg";
import "./signin.css"

class SignUp extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signUp(this.state);
  };

  render() {
    const { uid } = this.props;
    if (uid) return <Redirect to="/" />;
    return (
      <div classname="base-container" style={{backgroundColor: "white"}}>
        <form
          className="container"
          autoComplete="off"
          style={{ marginTop: "30px" },{align: "centre"}}
          onSubmit={this.handleSubmit}
        >
          
            <h3 className="dark-text text-darken-3 header">Sign Up</h3>
        
          <div className="content">
          <div className="image">
            <img src={logOutImg} style={{size: "100%"}} />
          </div>
          <div className="forms">
          <div className="input-field">
            <label htmlFor="email" style={{fontSize: "20px"}}>Enter Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password" style={{fontSize: "20px"}}>Enter Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="footers">
          <button type="submit" className="btn btn-primary">
            SignUp
          </button>
          </div>
          </div>
       </div> 
       </form>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const uid = state.firebase.auth.uid;
  return {
    uid: uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);