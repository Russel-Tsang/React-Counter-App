import React, { Component } from 'react';
import Counter1 from "../ReactCourseSection1/counter1";

class Counters extends Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.handleReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map(counter => (
                    <Counter1
                        handleIncrement={this.props.handleIncrement}
                        handleDecrement={this.props.handleDecrement}
                        onDelete={this.props.handleDelete}
                        key={counter.id}
                        counter={counter} >
                        <h4>Counter Id, {counter.id}</h4>
                    </Counter1>
                )
                )}
            </div >
        );
    }
}

export default Counters;