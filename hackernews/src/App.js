import React, { Component } from "react";
import "./App.css";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

const numbers = [1,2,3,4,5];

let numbers1 = [1,2,3,4,5];

class App extends Component {
  render() {
    // "className" equals class in HTML
    // arrow function without brackets and return statement has a "concise body"
    return (
      <div className="App">
        {list.map( item => 
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span> - {item.author}</span>
              <span>; {item.num_comments}</span>
              <span>, {item.points}</span>
            </div>
          )
        }
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

export default App;
