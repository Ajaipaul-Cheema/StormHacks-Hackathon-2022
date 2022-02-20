import React, { Component } from "react";

class Sharedtextarea extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <label>Enter Text: </label>
        <input type="textare" 
          name="Text"
          onChange={this.props.handleChange}
        />
         <input type="text" 
          name="sentenceNumber"
          onChange={this.props.handleChange}
        />
         <button type="submit">Summarize</button>
      </div>
    );
  }
}

export default Sharedtextarea;