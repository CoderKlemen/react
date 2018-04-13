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
  },
  {
    title: "C++",
    url: "https://en.wikipedia.org/wiki/C%2B%2B",
    author: "Bjarne Stroustrup",
    num_comments: 5,
    points: 10,
    objectID: 2
  },
];

// isSearched returns a true/false if item.title includes searchTerm
// we type searchTerm in the form, and item is an object in the "list"
// we can access it because of the returned funtion (higher-order function) 
const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //list: list,
      list,
      searchTerm: '',
    }

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  // removes a displayed item when you click the "Dismiss" button
  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  // you can access synthetic React events
  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value});

  }

  render() {
    // - "className" equals class in HTML
    // - arrow function without brackets and return statement has a "concise body"
    // - we use "this.state" to access the local state to map it on the page
    // - you can use shorthand to initialize object, where properties name is the same as variable name!
    // - Event handlers: 
    //    - you need to wrap the function in another function to make it fire when needed ( button click )
    //    - you can make it more concise using arrow functions

    const {searchTerm, list} = this.state;

    return (
      <div className="App">
        <h3>--App--</h3>
        <form>
          <input type="text" 
            onChange={this.onSearchChange}
          />
        </form>
        {this.state.list.filter(isSearched(searchTerm)).map( item => 
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span> - {item.author}</span>
              <span>; {item.num_comments}</span>
              <span>, {item.points} </span>
              <span>
                <button 
                  onClick={() => this.onDismiss(item.objectID)}  // arrow function is an event wrapper
                  // onClick={() => console.log(item.objectID)}
                  type="button"
                >
                  Dismiss
                </button>
              </span>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
