import React, { Component } from "react";
import "./App.css";


class NameForm extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            value: 'coconut'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        // this.setState({value: event.target.value.toUpperCase()});
    }

    handleSubmit(event) {
        alert(`Your favorite flavour is: ${this.state.value}`);  // " ` " se dobi z AltGr+7
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Select your favorite Croissant flavour:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="orange">Orange</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }


}

export default NameForm;