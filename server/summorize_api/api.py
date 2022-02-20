import os
import sys
import json
import requests


def summerizeTextAPI():
    text = sys.argv[1]
    numOfSentences = sys.argv[2]
    url = "https://api.meaningcloud.com/summarization-1.0"
    payload= {
    'key': 'c69d14e1894b2e000ca835ca3b785ef2',
    'txt': f'{text}',
    'sentences': f'{numOfSentences}' }

    res = requests.post(url, data=payload)
    a = res.text
    print(json.loads(a))
    sys.stdout.flush()

summerizeTextAPI()