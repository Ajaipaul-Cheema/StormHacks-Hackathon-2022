import React, { Component } from "react";

import './textarea.css';

class Sharedtextarea extends Component {
  render() {
    return (
      <div>
        <label>Enter Text: </label>
        <br></br>
        <input id="mainbox" type="textare" 
          name="Text"
          onChange={this.props.handleChange}
        />
        <br></br>
        <br></br>
         <input id="linenumber" type="text" 
          name="sentenceNumber"
          onChange={this.props.handleChange}
        />
        <br></br>
         <button type="submit">Summarize</button>
      </div>

    );
  }
}


export default Sharedtextarea;