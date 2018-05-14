import React, { Component } from "react";
import "./App.css";

const DEFAULT_QUERY = 'html';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search_by_date';
const PARAM_SEARCH = 'query=';
const TAG_SEARCH = 'tags=story';

// you can define style directly on the element, or outside to make them cleaner
const largeColumn = {
  width: '64%',
};

const midColumn = {
  width: '15%',
};

const smallColumn = {
  width: '7%',
};

//const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

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
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
  };

  setSearchTopStories(result) {
    this.setState({ result });
  };

  fetchSearchTopStories(searchTerm) {
    console.log(searchTerm);
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${TAG_SEARCH}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error);
  };

  componentDidMount() {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
  };

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

  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
    event.preventDefault();
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
            onSubmit={this.onSearchSubmit}
          > 
            Search
          </Search>
        </div>
        { result 
          ? <Table 
            list={result.hits}
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
const Search = ({children, value, onChange, onSubmit}) =>   
  <form onSubmit={onSubmit}>
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
    <button type="submit">
      {children} 
    </button>
  </form>



const Table = ({list, onDismiss}) =>
  <div className="table">
    {list.map(item =>
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
