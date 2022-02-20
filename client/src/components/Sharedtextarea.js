import React, { Component } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import './textarea.css';

const Sharedtextarea = () => {
  async function handleSubmit(event) {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    let arr = {}
    for (let [key, value] of formData.entries()) {
      arr[key] = value
    }
    let f = new FormData()

    f.append("key", "c69d14e1894b2e000ca835ca3b785ef2");
    f.append("txt", `${arr['Text']}`);
    f.append("sentences", `${arr['sentenceNumber']}`);

    const requestOptions = {
      method: 'POST',
      body: f,
      redirect: 'follow'
    };

    const response = await fetch('https://api.meaningcloud.com/summarization-1.0', requestOptions)
    .then((response) => response.json())
    .then(data => {
      console.log(data['summary'])
      document.getElementById("summarized").value = data['summary']; 
    }).catch(err => console.log(err))
  }

  return (
    <div className="main">
      <div className="container">
        <form className="textForm" onSubmit={handleSubmit}>
          <label>Enter Text To Summarize: </label><br />
          <br />

          <input id="mainbox" type="textare"
            name="Text" />
          <br />
          <label>Summarized Text: </label><br /><br />
          <div id="summary">
          <textarea id="summarized" type="textare"
            name="answer" />
          </div>
          <br />
          <label>Sentence Number: </label><br /><br />
          <input id="sentenceinput" type="number" name="sentenceNumber" min="1" />
          <br></br><br />
          <button id="text-submit" type="submit">Summarize</button>
        </form>
      </div>
    </div>
  )
}

export default Sharedtextarea