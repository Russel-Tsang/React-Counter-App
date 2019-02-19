import React, { Component } from 'react';
import Counter2 from "../ReactCourseSection1/counter2";

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 4 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    };

    handleReset = () => {
        this.state.counters.map(nthCounter => {
            nthCounter.value = 0;
            return nthCounter;
        })
    };

    handleDelete = (productID) => {
        const counters = this.state.counters.filter(nthCounter => nthCounter.id !== productID);
        this.setState({ counters: counters });  //we can also just use one "counter", since key + value are the same
    };

    render() {
        return (
            <div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter => (
                    <Counter2 onDelete={this.handleDelete} key={counter.id} counter={counter} >
                        <h4>Counter Id, {counter.id}</h4>
                    </Counter2>
                )
                )}
            </div >
        );
    }
}

export default Counters;