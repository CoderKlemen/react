import React, { Component } from "react";
import "./App.css";
import "./Composition.css"
import "./SplitPane.css"

class Composition1 extends Component {

    render() {
        return (

            // we have two identifiers defined in SplitPane in place of "children"
            <div>
                <WelcomeDialog/>
                <ColorDialogs/>
                
                <SplitPane 
                    left={ <Contacts />
                    }
                    right={ <Chat />
                    } />

                <SignUpDialog />
            </div>
        );
    }
}

// anything inside JSX tag <FancyBorder> will be passed to this component as props.children!!!!
function FancyBorder(props) {
    return (
        <div className={`FancyBorder FancyBorder-${props.color}`}>
            {props.children}
        </div>
    );
}

function Dialog(props) {
    return(
        <div>
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                    {props.title}   
                </h1>
                <p className="Dialog-message">
                    {props.message}
                </p>
                {props.children}
            </FancyBorder>
        </div>  
    );
};

function ColorDialogs(props) {
    return(
        <div>
            <FancyBorder color="blue">
                <h1>Blue</h1>
            </FancyBorder>
            <FancyBorder color="red">
                <h1>Red</h1>
            </FancyBorder>
            <FancyBorder color="yellow">
                <h1>Yellow green</h1>
            </FancyBorder>
        </div> 
    );
};

function WelcomeDialog() {
    return(
        <Dialog 
            title="Welcome"
            message="Thank you for visiting our ship!"
        />
    );
}

// you can use your names instead of "children", if you need more placeholders
function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

class Contacts extends Component {
    render() {
        return (
            <div className="Contacts">
                <h2>Constacts</h2>
            </div>
        );
    }
}

class Chat extends Component {
    render() {
        return (
            <div className="Chat">
                <h2>Chat</h2>
            </div>
        );
    }
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = { login: ''};
    };

    Dialog(props) {
        return(
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                    {props.title}   
                </h1>
                <p className="Dialog-message">
                    {props.message}
                </p>
                {props.children}
            </FancyBorder>  
        );
    }

    handleChange(e) {
        this.setState({login: e.target.value});
    };

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}`);
    };

    render() {
        return (
            <Dialog title="Mars Exploration Program"
                    message="How should we refer to you?">
                <input value={this.state.login}
                        onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Sign me up!
                </button>
            </Dialog>
        );
    };
}

export default Composition1;