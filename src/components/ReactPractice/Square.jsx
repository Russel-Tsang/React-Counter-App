import React, { Component } from 'react';
import './ColorGame.css';

class Square extends Component {
    //return the rgb value of a square when clicked
    changeColor = () => {
        if (this.props.children !== this.props.squareStyle.backgroundColor) {
            this.props.updateColor(this.props.squareStyle.backgroundColor, false);
        }
        else {
            console.log("correct");
        }
    }

    render() {
        return (
            <div
                onClick={this.changeColor} //create showColor prop passing a parameter from this component's showColor function
                className="square"
                style={this.props.squareStyle}
                ref="square">
                {this.props.squareText}
            </div>
        );
    }
}

export default Square;
