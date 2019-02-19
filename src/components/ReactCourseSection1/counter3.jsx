import React, { Component } from 'react';

class Counter3 extends Component {
    state = {
        value: 0,
        items: [
            "item1", "item2", "item3"
        ]
    }

    constructor() {
        super();
        this.Increment = this.Increment.bind(this);
        this.Decrement = this.Decrement.bind(this);
    }

    Increment() {
        this.setState({ value: this.state.value + 1 });
    }

    Decrement() {
        this.setState({ value: this.state.value - 1 });
    }

    render() {
        return (
            <div>
                <span
                    style={this.styles.buttonStyle}
                    className={this.formatClass()}
                >
                    {this.formatCount()}
                </span>
                <button
                    style={this.styles.buttonStyle}
                    className="btn btn-secondary btn-sm m-2"
                    onClick={this.Increment}
                >
                    Increment
                </button>
                <button
                    style={this.styles.buttonStyle}
                    className="btn btn-secondary btn-sm m-2"
                    onClick={this.Decrement}
                >
                    Decrement
                </button>
                <ul>
                    {this.state.items.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
        );
    }

    formatCount() {
        return this.state.value === 0 ? "zero" : this.state.value;
    }

    formatClass() {
        let countClass = "badge m-2 badge-";
        countClass += this.state.value <= 0 ? "danger" : "primary";
        return countClass;
    }

    styles = {
        buttonStyle: {
            fontSize: 20
        }
    }
}

export default Counter3;                
