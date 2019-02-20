import React, { Component } from "react";
import NavBar from './components/ReactCourseSection2/navbar';
import "./App.css";
import Counters from "./components/ReactCourseSection2/counters";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
