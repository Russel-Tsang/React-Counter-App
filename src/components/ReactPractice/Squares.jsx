import React, { Component } from 'react';
import Square from './Square';
import './ColorGame.css';

class Squares extends Component {
    state = {
        squares: 6,
        colors: [],
        winningColor: ""
    }

    //generate a number of random colors and place into "colors" state, choose a random winning color
    randomColorGen = () => {
        let colors = [];
        let winningColor = ""
        let r = "";
        let g = "";
        let b = "";
        for (let i = 0; i < this.state.squares; i++) {
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);
            colors.push(("rgb(" + r + ", " + g + ", " + b + ")"));
        }
        this.setState({ colors });
        winningColor = colors[Math.floor(Math.random() * colors.length)];
        this.setState({ winningColor });
    }

    //update color of clicked div by changing the state
    updateColor = (clickedColor, match) => {
        if (match === false) {
            let colors = this.state.colors;
            for (let index in colors) {
                if (clickedColor === colors[index])
                    colors[index] = "rbg(255, 255, 255)";
                this.setState({ colors: colors });
            }
        }
    }

    //map colors array state into div background colors 
    mapDivs() {
        return (
            <div className="container">
                {this.state.colors.map(color => (
                    <Square
                        key={color}
                        squareStyle={{ backgroundColor: color }}
                        squareText={color}
                        showColor={this.colorCompare}
                        updateColor={this.updateColor}
                        ref="square">
                        {this.state.winningColor}
                    </Square>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div>
                <button className="center" style={{ width: 100 }} onClick={this.randomColorGen}>
                    button
                </button>
                {this.mapDivs()}
            </div>
        );
    }
}

export default Squares;

    //compare winningColor with clicked square color
    //color parameter comes from Square's showColor prop
    // colorCompare = (color) => {
    //     if (color === this.state.winningColor) {
    //         console.log("correct");
    //     }
    //     else {
    //         console.log("wrong");
    //         console.log(this.refs.square);
    //     }
    // }
