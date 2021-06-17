import React from "react";
import AddTask from "../tasks/AddTask";
import Tasks from "../tasks/Tasks";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom"

const Dashboard = ({ uid }) => {
  if (!uid) return <Redirect to="/signin" />;
  return (
    <>
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
      <AddTask />
      </div>
          <div className="col s20 m8 offset-m1">
      <Tasks />
      </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return {
    uid: uid,
  };
};

export default connect(mapStateToProps)(Dashboard);


