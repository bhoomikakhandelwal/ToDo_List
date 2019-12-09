import React from "react";

export default class Todo extends React.Component {
  done(event) {
    event.preventDefault();

    this.props.toggle(this.props.todo);
  }

  render() {
    let todo = this.props.todo;
    if (todo.done) {
      return (
        <div>
          <li className="list-items">
            <div className="circle-point" />
            <p className="list-name">
              <a href="" onClick={this.done.bind(this)}>
                <del>{todo.text}</del>
              </a>
            </p>
          </li>
          <hr className="hr-line" />
        </div>
      );
    } else {
      return (
        <div>
          <li className="list-items">
            <div className="circle-point" />
            <p className="list-name">
              <a href="" onClick={this.done.bind(this)}>
                {todo.text}
              </a>
            </p>
          </li>
          <hr className="hr-line" />
        </div>
      );
    }
  }
}
