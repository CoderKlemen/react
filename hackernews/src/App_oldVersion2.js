import React, { Component } from "react";
import "./App.css";

const DEFAULT_QUERY = 'redux';

const PATH_VASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

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
  {
    title: "C++ Primer",
    url: "https://www.amazon.com/Primer-5th-Stanley-B-Lippman/dp/0321714113",
    author: "Stanley B. Lippman",
    num_comments: 4,
    points: 12,
    objectID: 3
  },
];

// you can define style directly on the element, or outside to make them cleaner
const largeColumn = {
  width: '40%',
};

const midColumn = {
  width: '30%',
};

const smallColumn = {
  width: '10%',
};

const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

    const {searchTerm, list} = this.state; // destructuring assignment

    return (
      <div className="page">
        <h3>--App--</h3>
        <div className="interactions">
          <Search 
            value={searchTerm}
            onChange={this.onSearchChange}
          > 
            Search
          </Search>
        </div>
        <Table 
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

// you can make a "Functional Stateless Component" a concise arrow function
// - you can still have something before return, if you want to...
const Search = ({children, value, onChange}) =>   
  <form>
    {children} <input
      type="text"
      value={value}
      onChange={onChange}
    />
  </form>



const Table = ({list, item, pattern, onDismiss}) =>
  <div className="table">
    {list.filter(isSearched(pattern)).map(item =>
      <div key={item.objectID} className="table-row">
        <span style={largeColumn}>
          <a href={item.url}>{item.title}</a>
        </span>
        <span style={midColumn}>
          {item.author}
        </span>
        <span  style={smallColumn}>
          {item.num_comments}
        </span>
        <span style={smallColumn}>
          {item.points}
        </span>
        <span  style={smallColumn}>
          <Button
            onClick={() => onDismiss(item.objectID)}
            className="button-inline"
          >
            Dismiss
          </Button>
        </span>
      </div>
    )}
  </div>

// you can create reusable components -> it's easier to make changes later, you only need to change the component
const Button = ({onClick, className, children}) =>
  <button 
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>


export default App;
