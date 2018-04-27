import React, { Component } from 'react'


class Synthetic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valueEventType: ''
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        console.log(event);
        console.log(event.type);

        console.log(event.isTrusted)

        const eventType = event.type;
        this.setState({ valueEventType: eventType });
    };

    render() {
        return (
            <div>
                <button
                    type="submit"
                    onClick={this.onClick}
                >
                    Click me
                </button>
                <p>Event: {this.state.valueEventType}</p>
            </div>
        );
    };


}

export default Synthetic;