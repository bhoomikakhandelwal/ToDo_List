import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    let items = [];
    let todos = _.sortBy(this.props.todos, "done");

    for (let index in todos) {
      items.push(
        <Todo todo={todos[index]} key={index} toggle={this.props.toggle} />
      );
    }

    return <ul className="list-type">{items}</ul>;
  }
}
