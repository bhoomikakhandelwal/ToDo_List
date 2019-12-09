import React from "react";

export default class NewTodo extends React.Component {
  create(event) {
    event.preventDefault();
    let text = this.refs.newTodoText.value;
    if (text) {
      this.props.createTask(text);
      this.refs.newTodoText.value = "";
    }
  }

  render() {
    return (
      <div className="mdl-grid mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone newtodo--main">
        <div className="mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet mdl-cell--4-col-phone">
          <h3 className="heading-h3">ToDo</h3>
        </div>
        <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--4-col-phone button-div">
          <form onSubmit={this.create.bind(this)}>
            <input type="text" ref="newTodoText" className="input-text" />{" "}
            <button
              className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored button-add"
              type="submit"
            >
              <i className="material-icons">add</i>
            </button>
          </form>
        </div>
        <hr className="hr-line--heading" />
      </div>
    );
  }
}
