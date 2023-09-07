import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.add = this.add.bind(this);
  }

  add() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className="">
        <h1>App Class</h1>
        <div>{this.state.count}</div>
        <input
          type="text"
          onChange={(event) => this.setState({ count: +event.target.value })}
          value={this.state.count}
        ></input>
        <button onClick={() => this.add()}>Add</button>
      </div>
    );
  }
}

export default CounterClass;
