import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    //BEM naming Convention
    <div className="App">
      {/* <p>Reshika Shrestha</p> */}
      <Header />

      <div className="app_body">
        <Sidebar />
      </div>
      {/* React-Router  -> Chat Screen*/}
    </div>
  );
}

export default App;
