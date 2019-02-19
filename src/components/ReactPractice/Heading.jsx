import React, { Component } from 'react';

class Heading extends Component {
    render() {
        return (
            <h1 style={styles.heading}>
                {this.props.headingText}
            </h1>
        );
    }
}

const styles = {
    heading: {
        textAlign: "center",
    }
}

export default Heading;
