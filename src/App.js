import React, { Component } from "react";
import Quote from "./components/QuoteComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      quote: 'Life is movement-we breathe, we eat, we walk, we move!',
      author: 'John Pierrakos',
    };
  }
  randomQuote() {
    //TODO: 
  }

  shuffleQuotes(array){
    //TODO: 
  }

  handleClick = () => {
    //TODO: 
  };

  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }
  
  render() {
    return (
      <div>
        <Quote
          displayColor={this.randomColor}
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;
