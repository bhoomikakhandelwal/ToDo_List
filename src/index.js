import React from "react";
import ReactDOM from "react-dom";
import TodoPageLayout from "../../components/TodoPageLayout";

import "./styles.css";

function App() {
  return <TodoPageLayout />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
