import React, { Component } from "react";
import NavBar from './components/ReactCourseSection2/navbar';
import "./App.css";
import Counters from "./components/ReactCourseSection2/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  };

  //set all "values" of "counters" object to zero
  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    })
    this.setState({ counters });
  }

  //increment value of selected counter by 1
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  //decrement value of selected counter by 1
  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  //deletes selected counter
  handleDelete = (productID) => {
    const counters = this.state.counters.filter(nthCounter => nthCounter.id !== productID);
    this.setState({ counters: counters });  //also can just use one "counter", since key + value are the same
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(nthCounter => nthCounter.value > 0).length} />
        <main className="container">
          <Counters
            handleReset={this.handleReset}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
            handleDelete={this.handleDelete}
            counters={this.state.counters} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
