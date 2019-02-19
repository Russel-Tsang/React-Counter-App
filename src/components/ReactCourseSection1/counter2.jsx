import React, { Component } from "react";

class Counter2 extends Component {
  state = {
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"]
  }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
      <div>
        {this.props.children}
        <span style={{ fontSize: 20 }} className={this.countClasses()}>
          {this.formatCount()}
        </span>
        <button onClick={() => this.handleIncrement({ id: 1 })} className="btn btn-secondary btn-sm m-2">
          Increment
        </button>
        <button onClick={this.minusOne} className="btn btn-secondary btn-sm m-2">
          Decrement
        </button>
        <button onClick={this.reset} className="btn btn-secondary btn-sm">
          Reset
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
          Delete
        </button>
      </div >
    );
  }

  countClasses() {
    let countClasses = "badge m-2 ";
    countClasses += this.state.value === 0 ? "badge-warning" : "badge-primary";
    return countClasses;
  }

  formatCount() {
    return this.state.value === 0 ? "zero" : this.state.value;
  }

  plusOne = () => {
    this.setState({ value: this.state.value + 1 });
  };

  minusOne = () => {
    this.setState({ value: this.state.value - 1 });
  };

  reset = () => {
    this.setState({ value: this.state.value - this.state.value });
  };

  // plusOne = product => {
  //   console.log(product);
  //   this.setState({ count: this.state.count + 1 });
  // };

  // render() {
  //   return (
  //     <React.Fragment>
  //       <span className={this.formatCount()}>{this.state.count}</span>

  //       <button
  //         className={this.formatButton()}
  //         onClick={() => this.plusOne(product)}
  //       >
  //         Increment
  //       </button>
  //     </React.Fragment>
  //   );
  // }

  // formatButton() {
  //   let buttonSizeCount = "btn btn-secondary btn-";
  //   buttonSizeCount += this.state.count > 5 ? "bg" : "sm";
  //   return buttonSizeCount;
  // }

  // formatCount() {
  //   let buttonSize = "btn btn-primary btn-";
  //   buttonSize += this.state.count > 5 ? "bg" : "sm";
  //   return buttonSize;
  // }
}

export default Counter2;
