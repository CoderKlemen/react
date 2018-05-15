import React, { Component } from "react";


class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {
        return (
            <div>
                <h4>Current time: </h4>
                <span>{this.state.date.toLocaleTimeString()}</span>
            </div>
        );
    }
}

export default Clock;