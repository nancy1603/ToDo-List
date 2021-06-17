import React, { Component } from "react";
import { signIn } from "../../actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

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
      <div className="container">
        <form
          className="cream"
          autoComplete="off"
          style={{ marginTop: "30px" }}
          onSubmit={this.handleSubmit}
        >
          <legend>
            
            <h3 className="grey-text text-darken-3">Sign In</h3>
          </legend>
          <div className="input-field">
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <button class="btn waves-effect waves-light btn-large" type="submit" name="action">
            Sign In<i class="material-icons right">send</i>
          </button>
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