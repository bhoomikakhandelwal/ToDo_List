import React from "react";
import NewTodo from "./NewTodo";
import TodoList from "./TodoLIst";

export default class HomePageLayout extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          text: "Morning walk",
          done: false
        },
        {
          text: "Go to Gym",
          done: false
        },
        {
          text: "Client meeting",
          done: false
        }
      ]
    };
  }

  createTask(text) {
    this.state.todos.push({
      text,
      done: false
    });

    this.setState({ todos: this.state.todos });
  }

  toggleTask(todo) {
    let task = _.find(this.state.todos, todo);
    task.done = !task.done;
    this.setState({ todos: this.state.todos });
  }

  render() {
    return (
      <div className="mdl-grid mdl-cell--12-col-desktop mdl-cell--4-col-phone mdl-cell--8-col-tablet">
        <div className="mdl-cell mdl-cell--8-col mdl-cell--4-col-phone mdl-cell--8-col-tablet main-todo">
          <NewTodo createTask={this.createTask.bind(this)} />
          <TodoList
            todos={this.state.todos}
            toggle={this.toggleTask.bind(this)}
          />
        </div>
      </div>
    );
  }
}
