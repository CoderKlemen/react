import React, { Component } from "react";
import "./App.css";

const DEFAULT_QUERY = 'qt';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

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
      result: null,
      searchTerm: DEFAULT_QUERY,
    };

    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  };

  setSearchTopStories(result) {
    this.setState({ result });
  };

  componentDidMount() {
    const { searchTerm } = this.state;

    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error);
  }

  // removes a displayed item when you click the "Dismiss" button
  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedHits = this.state.result.hits.filter(isNotId);
    /*
    // this works
    this.setState({ 
      result: Object.assign({}, this.state.result, {hits: updatedHits})
    });*/
    // but this is more React way!!!
    this.setState({
      result: {...this.state.result, hits: updatedHits }
    })
  };

  // you can access synthetic React events
  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value});

  };


  // conditional rendering with ternary operator
  // you can also use logical AND '&&' operator
  render() {

    const {searchTerm, result} = this.state; // destructuring assignment
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
        { result 
          ? <Table 
            list={result.hits}
            pattern={searchTerm}
            onDismiss={this.onDismiss}
          />
          : null
        }
        
      </div>
    );
  };
};

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
          <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
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
