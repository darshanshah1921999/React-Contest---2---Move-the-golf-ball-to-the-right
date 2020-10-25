import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, //variable needed to be changed
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  //call back function
  buttonClickHandler() {
    const copy = { ...this.state };
    copy.renderBall = true;
    this.setState(copy);
  }
  renderChoice() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
  }

  //bind ArrowRight keydown event
  componentDidMount() {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 39) {
        const copy = { ...this.state };
        copy.posi = copy.posi + 5;
        copy.ballPosition = {
          left: copy.posi + "px"
        };
        this.setState(copy);
      }
    });
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
