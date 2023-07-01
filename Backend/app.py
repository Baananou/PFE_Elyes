# Required imports
from flask import Flask, request, jsonify
from firebase_admin import credentials, initialize_app, db
from flask_cors import CORS, cross_origin

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Initialize Firebase Admin SDK
cred = credentials.Certificate('key.json')
default_app = initialize_app(cred, {
    'databaseURL': 'https://c2ipfe-default-rtdb.europe-west1.firebasedatabase.app/'  # Replace with your Firebase Realtime Database URL
})

# Get a reference to the Firebase Realtime Database
ref = db.reference()

@app.route('/data', methods=['GET'])
@cross_origin()
def get_data():
    key = request.args.get('key')  # Get the value of the 'key' query parameter

    if key is None:
        return jsonify({'error': 'Key parameter is required.'}), 400

    data = ref.get()
    if key in data:
        value = data[key]
        return jsonify(value), 200
        # return jsonify({key: value}), 200
    else:
        return jsonify({'error': 'Key not found.'}), 404

if __name__ == '__main__':
    app.run()