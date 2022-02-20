from email import header
import json
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, support_credentials=True)

def summerizeTextAPI(text, numOfSentences):
    url = "https://api.meaningcloud.com/summarization-1.0"
    payload= {
    'key': 'c69d14e1894b2e000ca835ca3b785ef2',
    'txt': f'{text}',
    'sentences': f'{numOfSentences}' }

    res = requests.post(url, data=payload)
    a = res.text
    return json.loads(a)


@app.route("/api/summorize", methods = ['GET'])
def summorize():
    data = request.json
    a = summerizeTextAPI(data['text'], data['len'])
    response = jsonify(a)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == "__main__":
    app.run(host="localhost", debug=True, port=9000)

