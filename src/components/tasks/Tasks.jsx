
import React from "react";
import Task from "./Task";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const Tasks = ({ tasks }) => {
  return (
    <>
      <table
        className="table table-success container "
        style={{ marginTop: "30px" }}
      >
        <thead>
          <tr className="table-warning table-hover">
            <th scope="row">Tasks</th>
            <th scope="row">Added On</th>
            <th scope="row">Status</th>
            <th scope="row">Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks && tasks.map((task) => <Task task={task} key={task.id} />)}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const tasks = state.firestore.ordered.tasks;
  return {
    tasks: tasks,
    uid: state.firebase.auth.uid
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "tasks",
      where: ["authorId", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
  ])
)(Tasks);