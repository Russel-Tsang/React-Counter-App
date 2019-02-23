import React, { Component } from 'react';
import Counter1 from "../ReactCourseSection1/counter1";

//reset button + a number of counters (based on the how many counters are in the counters state)
class Counters extends Component {
    render() {
        const { handleReset, handleIncrement, handleDecrement, handleDelete } = this.props;
        return (
            <div>
                <button
                    onClick={handleReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map(counter => (
                    <Counter1
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                        onDelete={handleDelete}
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