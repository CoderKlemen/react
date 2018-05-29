import React, {Component} from 'react';

// class field declarations -> no need to bind the methods!!!!
// - by using arrow functions you remove the need for .bind()

export default class Counter extends Component {
    state = { value: 0 };
  
    handleIncrement = () => {
      this.setState(prevState => ({
        value: prevState.value + 1
      }));
    };
  
    handleDecrement = () => {
      this.setState(prevState => ({
        value: prevState.value - 1
      }));
    };
  
    render() {
      return (
        <div>
          {this.state.value}
  
          <button onClick={this.handleIncrement}>+</button>
          <button onClick={this.handleDecrement}>-</button>
        </div>
      )
    }
  }
  