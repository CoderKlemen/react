import React, { Component } from "react";
import "./App.css";


const numbers = [1,2,3,4,5];
// const numbers = [];  // used to test conditional rendering..

let numbers1 = [1,2,3,4,5];
let first;
let second;
let third;

// array spread operator
const userList = ['Polde', 'Stef', 'Matija'];
const otherUsers = ['Lujo', 'Gosencic'];
const additionalUser = 'Vidic';
const allUsers = [...userList, additionalUser];
/* 
this way you disable ESLint warning just for one line and one specific warning !!!! 
- very useful and the correct way to do it!!!!
- glej spodaj !!!! 
*/
//eslint-disable-next-line no-unused-vars
const LSUsers = [...userList, ...otherUsers];

console.log(allUsers);
// console.log(LSUsers);

// object spread operator
const userNames = { firstName: 'Polde', lastName: 'Polencek'};
const userAge = { age: 18 };
const user = {...userNames, ...userAge };

const messages = ['React', 'Re: React', 'Re:Re: React'];

console.log(user);


// Destructuring assignment
[first, second, ...third] = numbers1;

console.log(first);
console.log(second);
console.log(third);

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
    if (! numbers.length) {
      return <p>Numbers is empty!</p>
    }

    return (
      <div className="App">
        <h3>--App2--</h3>
        {this.myFunctMap()}
        <p>
          {this.myFunctReduce()}
        </p>
        <h4>It is {this.state.date.toLocaleTimeString()}.</h4>
        <button type="button"
          // using arrow function to make sure the function is executed when we click the button
          onClick={() => console.log(this.state.date.toLocaleDateString())}
        > Date </button>
        <Mailbox unreadMessages={messages} />
      </div>
    );
  };
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return ( 
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && 
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
};



export default App2;
