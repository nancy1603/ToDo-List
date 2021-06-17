import React, { Component } from "react";
import { addTask } from "../../actions/taskActions";
import { connect } from "react-redux";

class AddTask extends Component {
  state = {
    task: "",
    checked: "false",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state);
    document.getElementById("addTaskForm").reset();
    console.log(this.state);
  };

  render() {
    return (
      <>


        <form
          id="addTaskForm"
          className="container"
          autoComplete="off"
          style={{ margin: "100px"}}
          onSubmit={this.handleSubmit}
        >
          <legend> </legend>
          <div className="materialboxed">
            <label htmlFor="task"><h3>ADD A TASK!!</h3></label>
            <input
              type="text"
              className="form-control"
              id="task"
              style={{ marginTop: "50px" }}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn-primary btn-floating pulse btn-large" style={{ marginTop: "50px" }}>
            Add
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
  };
};

export default connect(null, mapDispatchToProps)(AddTask);