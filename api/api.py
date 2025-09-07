import html
from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)


@app.route('/api/trivia')
def get_trivia():
    print("trivia api called!")

    url = 'https://opentdb.com/api.php?amount=1&type=multiple'
    response = requests.get(url).json()

    if (
        not response or
        response.get('response_code') != 0 or
        'results' not in response or
        not response['results']
    ):
        return jsonify({"error": "No trivia found", "raw": response}), 500

    question_data = response['results'][0]

    return jsonify({
        'question': html.unescape(question_data['question']),
        'correct_answer': html.unescape(question_data['correct_answer']),
        'incorrect_answers': [html.unescape(ans) for ans in question_data['incorrect_answers']]
    })
