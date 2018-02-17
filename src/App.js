import React, { Component } from 'react';
import './App.css';
import ValidateComponent from './ValidateComponent';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    text: "",
    textLength: 0
  }

  getTextLength = (event) => {
    this.setState ( {
      text: event.target.value,
      textLength: event.target.value.length
    })
  }

  removeChar = (index) => {
    let text = this.state.text;
    text = text.slice(0, index) + text.slice(index+1, text.length);
    this.setState({
      text: text,
      textLength: text.length
    });
  }
  render() {
    
    return (
      <div className="App">
      <input id="ip" type="text" onChange={this.getTextLength.bind(this)}/>
      <p>Length of text typed: <code>{this.state.textLength}</code></p>
      <ValidateComponent length={this.state.textLength}/>
        {
          this.state.text.split('').map((ch, index) => {
            return <CharComponent c={ch} click={() => this.removeChar(index)}/>
          })
        }
      </div>
    );
  }
}

export default App;
