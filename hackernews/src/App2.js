import React, { Component } from "react";
import "./App.css";


const numbers = [1,2,3,4,5];

let numbers1 = [1,2,3,4,5];

class App2 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      numbers: numbers,
      numbers1: numbers1,
      date: new Date(),
    }
  };

  myFunctMap() {
    return  (
      this.state.numbers.map( num => {
        return (
          <li key={num.toString()}>
            {num}
          </li>
        ) 
      })
    );
  };

  myFunctReduce() {
    return (
      this.state.numbers1.reduce( (acc, cur) => {
        return acc + cur;
      })
    );
  };

  // runs after the component output has been rendered to the DOM
  // good place for a timer, ...
  componentDidMount() {

  }

  // runs when component is destroyed???
  // you can cancel the timer here, and other stuff too ...
  componentWillUnmount() {

  };

  render() {
    // - "className" equals class in HTML
    // - arrow function without brackets and return statement has a "concise body"
    // - you can move parts of render to a function and use that function in render!
    return (
      <div className="App">
        <h3>--App2--</h3>
        {this.myFunctMap()}
        <p>
          {this.myFunctReduce()}
        </p>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button type="button"
          // using arrow function to make sure the function is executed when we click the button
          onClick={() => console.log(this.state.date.toLocaleDateString())}
        > Date </button>
      </div>
    );
  };
}

export default App2;
