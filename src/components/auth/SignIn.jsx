import React, { Component } from "react";
import { signIn } from "../../actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Grid, Avatar } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import loginImg from "../../login.svg";
import "./signin.css"
class SignIn extends Component {
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
    this.props.signIn(this.state);
  };

  render() {
    const { uid } = this.props;
     if(uid) return <Redirect to="/"/>
    return (
     
      <div classname="base-container" style={{backgroundColor: "grey"}}>
         
        <form
          className="cream"
          autoComplete="off"
          style={{ marginTop: "70px" },{align: "centre"}}
          onSubmit={this.handleSubmit}
        >
          
          <Grid align='center'>
          <Avatar style={{backgroundColor:"black"},{top: "100px"}}><LockOutlinedIcon/></Avatar>
          </Grid>
            <h3 className="dark-text text-darken-3 header">Sign In</h3>
            <div className="content">
          <div className="image">
            <img src={loginImg} style={{size: "100%"}} />
          </div>
          <div className="form">
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
          
          <div className="footer">
          <button class="btn waves-effect waves-dark btn-large " type="submit" name="action" style={{color: "white"}}>
            Sign In<i class="material-icons right">send</i>
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
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);