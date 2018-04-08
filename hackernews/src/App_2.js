import React, { Component } from "react";
import "./App.css";


const numbers = [1,2,3,4,5];

let numbers1 = [1,2,3,4,5];

class App_2 extends Component {
  render() {
    // "className" equals class in HTML
    // arrow function without brackets and return statement has a "concise body"
    return (
      <div className="App">
        {
          numbers.map( num => {
            return (
              <li key={num.toString()}>
                {num}
              </li>
            ) 
          })
        }
        <p>
          {numbers1.reduce( (acc, cur) => {
            return acc + cur;
          })}
        </p>
      </div>
    );
  }
}

export default App_2;
