import React, { Component } from "react";
import axios from 'axios';
import "./App.css";

const DEFAULT_QUERY = 'html';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search_by_date';
const PARAM_SEARCH = 'query=';
const TAG_SEARCH = 'tags=story';
const PAGE_SEARCH = 'page=';

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
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      results: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
      error: null,
    };

    this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
  };

  needsToSearchTopStories(searchTerm) {
    return !this.state.results[searchTerm];
  }

  setSearchTopStories(result) {
    const { hits, page } = result;
    const { searchKey, results } = this.state;

    const oldHits = results && results[searchKey] 
      ? results[searchKey].hits 
      : [];

    const updatedHits = [
      ...oldHits,
      ...hits
    ];

    this.setState({ 
      results: {
        ...results,
        [searchKey]: { hits: updatedHits, page }
      }
    });
  };

  fetchSearchTopStories(searchTerm, page) {
    if (!page) {
      page = 0;
    }
    // console.log(searchTerm + ' ' + page);
    axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PAGE_SEARCH}${page}&${TAG_SEARCH}`)
      // .then(response => response.json())
      .then(result => this._isMounted && this.setSearchTopStories(result.data))
      .catch(error => this._isMounted && this.setState({error}));
  };

  componentDidMount() {
    this._isMounted = true;

    const { searchTerm } = this.state;
    this.setState({searchKey: searchTerm });
    this.fetchSearchTopStories(searchTerm);
  };

  componentWillUnmount() {
    this._isMounted = false;
  };

  // removes a displayed item when you click the "Dismiss" button
  onDismiss(id) {
    const {searchKey, results } = this.state;
    const {hits, page } = results[searchKey];

    const isNotId = item => item.objectID !== id;
    const updatedHits = hits.filter(isNotId);
    /*
    // this works
    this.setState({ 
      result: Object.assign({}, this.state.result, {hits: updatedHits})
    });*/
    // but this is more React way!!!
    this.setState({
      result: {
        ...results,
        [searchKey]: { hits: updatedHits, page }
      }
    })
  };

  // you can access synthetic React events
  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value});
  };

  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });

    if (this.needsToSearchTopStories(searchTerm)) {
      this.fetchSearchTopStories(searchTerm);
    }  
    event.preventDefault();
  };


  // conditional rendering with ternary operator
  // you can also use logical AND '&&' operator
  render() {

    const {
      searchTerm, 
      results,
      searchKey,
      error
    } = this.state; // destructuring assignment

    const page = (
      results && 
      results[searchKey] && 
      results[searchKey].page
    ) || 0;

    const list = (
      results &&
      results[searchKey] &&
      results[searchKey].hits
    ) || [];

    return (
      <div className="page">
        <h3>---App---</h3>
        <div className="interactions">
          <Search 
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          > 
            Search
          </Search>
        </div>
        { error 
          ? <div className="interactions">
            <p>Something went wrong!</p>
          </div>
          : <Table 
            list={list}
            onDismiss={this.onDismiss} 
            /> 
        }
        <div className="interactions">
          <Button onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}>
            More
          </Button>  
        </div>  
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

export {
  Button,
  Search,
  Table
};
