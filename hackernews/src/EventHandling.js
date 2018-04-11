import React, { Component } from "react";
import "./App.css";


class EventHandling extends Component {

    handleClick(e) {
        e.preventDefault(); // to override the default behaviour, so we can log out a message!!!
        console.log('The link was clicked');
    };

    render() {
        return (
            <a href="#" onClick={this.handleClick}>
                Click me!
            </a>
        );
    };
}

export default EventHandling;