from flask import Flask, request, jsonify
from transformers import pipeline
import time

app = Flask(__name__)

def generate_film_story(prompt):
    story_generator = pipeline("text-generation", model="gpt-3.5-turbo")
    return story_generator(f"Create a blockbuster fight sequence for: {prompt}.", max_length=250)[0]['generated_text']

@app.route('/generate_film', methods=['POST'])
def generate_film():
    data = request.json
    prompt = data.get('prompt', '')
    if not prompt:
        return jsonify({'error': 'Missing story description'}), 400
    time.sleep(4)
    return jsonify({'story': generate_film_story(prompt), 'status': 'success'})

if __name__ == '__main__':
    app.run(debug=True)
