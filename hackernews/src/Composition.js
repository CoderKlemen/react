import React, { Component } from "react";
import "./App.css";
import "./Composition.css"
import "./SplitPane.css"

class Composition extends Component {
    constructor(props) {
        super(props)

        this.FancyBorder = this.FancyBorder.bind(this);
        this.Dialog = this.Dialog.bind(this);
        this.SplitPane = this.SplitPane.bind(this);
        this.WelcomeDialog = this.WelcomeDialog.bind(this);
        // this.SignUpDialog = this.SignUpDialog.bind(this);
    }

    // anything inside JSX tag <FancyBorder> will be passed to this component as props.children!!!!
    FancyBorder(props) {
        return (
            <div className={`FancyBorder FancyBorder-${props.color}`}>
                {props.children}
            </div>
        );
    }

    // you can use your names instead of "children", if you need more placeholders
    SplitPane(props) {
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

    Dialog(props) {
        return(
            <this.FancyBorder color="blue">
                <h1 className="Dialog-title">
                    {props.title}   
                </h1>
                <p className="Dialog-message">
                    {props.message}
                </p>
                {props.children}
            </this.FancyBorder>  
        );
    }

    WelcomeDialog() {
        return(
            <this.Dialog 
                title="Welcome"
                message="Thank you for visiting our ship!"
            />
        );
    }

    render() {
        return (
            // anything inside this tags will be passed as props.children -> "Welcome" in this case !!

            // we have two identifiers defined in SplitPane in place of "children"
            <div>
                <this.WelcomeDialog/>
                
                <this.SplitPane 
                    left={ <Contacts />
                    }
                    right={ <Chat />
                    } />

                <SignUpDialog />
            </div>
        );
    }
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
            <this.FancyBorder color="blue">
                <h1 className="Dialog-title">
                    {props.title}   
                </h1>
                <p className="Dialog-message">
                    {props.message}
                </p>
                {props.children}
            </this.FancyBorder>  
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
            <this.Dialog title="Mars Exploration Program"
                    message="How should we refer to you?">
                <input value={this.state.login}
                        onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Sign me up!
                </button>
            </this.Dialog>
        );
    };
}

export default Composition;