import React from "react";
import Sidebar from "./component/sidebar/Sidebar";
import WorkSpace from "./component/workSpace/workSpace";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <WorkSpace />
    </div>
  );
}

export default App;
