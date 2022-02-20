import React, { Component } from "react";

import './textarea.css';

class Sharedtextarea extends Component {
  render() {
    return (
      <div class="container">
        <form >
          <label>Enter Text To Summarize: </label><br />
          <br />
          
          <textarea id="mainbox" type="textare"
            name="Text"
            onChange={this.props.handleChange}
          />
          <br />
          <label>Sentence Number: </label><br /><br />
          <input id="linenumber" type="number"
            name="sentenceNumber"
            onChange={this.props.handleChange}
            oninput="validity.valid||(value='');" min="1"
          />
          <br></br><br />
          <button type="submit">Summarize</button>
        </form>
      </div>

    );
  }
}


export default Sharedtextarea;