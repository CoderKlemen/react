import React, { Component } from "react";
import "./App.css";


// binding is put either in the constructor, or in render... Constructor is preffered!!!
// you can define your logic in the constructor, but it should be avoided, because it will clutter your constructor
// if bind is made in render, it binds every time your component updates...

// if you use arrow functions they are bound automatically!!!

class ExplainBindingsComponent extends Component {
    /*constructor() {
        super();

        this.onClickMe = this.onClickMe.bind(this);

        // this.onClickMe = () => { console.log(this)};


    };*/

    /*
    onClickMe() {
        console.log(this);
    };
    */

    onClickMe = () => {
        console.log(this);
    }

    render() {
        return (
            <button 
              // onClick={this.onClickMe.bind(this)}
              onClick={this.onClickMe}
              type="button"
            >
                Click me 
            </button>
        );
    };
}

export default ExplainBindingsComponent;