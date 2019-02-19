import React, { Component } from "react";

class Counter2 extends Component {

  render() {
    return (
      <div>
        {this.props.children}
        <span style={{ fontSize: 20 }} className={this.countClasses()}>
          {this.formatCount()}
        </span>
        <button onClick={() => this.props.handleIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">
          Increment
        </button>
        <button onClick={() => this.props.handleDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">
          Decrement
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
          Delete
        </button>
      </div >
    );
  }

  countClasses() {
    let countClasses = "badge m-2 ";
    countClasses += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return countClasses;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
  }

}

export default Counter2;
