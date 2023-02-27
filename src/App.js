import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import AddTask from "./component/Addtask";
import ListTask from "./component/ListTask";
import './App.css';

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <AddTask />
        <ListTask />
      </Provider>
    </div>
  );
}

export default App;
