import React from "react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import { connect } from "react-redux";

const NavBar = () => {
  return (
    <>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
        <Link to="/" className="brand-logo">
          <h3>TodoApp</h3>
        </Link>
        <NavItems />
     </div> 
     </nav>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
};

export default connect(mapStateToProps)(NavBar);
