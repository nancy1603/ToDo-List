


import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "../../actions/authActions";
import { connect } from "react-redux";

const NavItems = ({ signOut, uid }) => {
  if (uid) {
    return (
      <div className="right">
      <Link to="/signin" className="active" onClick={signOut}>
        Sign Out
      </Link>
      </div>
    );
  } else {
    return (
      <>
      <div className="nav-wrapper">
      <ul class="right hide-on-med-and-down">
        <Link to="/signup" className="right">
          Sign Up
        </Link>
        <Link to="/signin" className="right">
          Sign In
        </Link>
        </ul>
     </div> 
     </>
    );
  }
};

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return {
    uid: uid,
  };
};

const mapDistpatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(NavItems);