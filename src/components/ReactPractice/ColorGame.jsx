import React, { Component } from 'react';
import Heading from './Heading';
import Squares from './Squares';
import './ColorGame.css';


class ColorGame extends Component {
    state = {
        headingText: "Guess The Color",
        messageText: ""
    }

    messageFormat(match) {
        // return match === false? this.state.incorrectText: this.state.correctText;
    }

    render() {
        return (
            <div>
                <Heading headingText={this.state.headingText} />
                <h2>{this.state.messageText}</h2>
                <Squares />

            </div>
        );
    }
}

export default ColorGame;
