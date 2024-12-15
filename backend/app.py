from flask import Flask, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)

# Load the model and preprocessor
preprocessor = joblib.load('models/preprocessor.pkl')
kmeans = joblib.load('models/kmeans_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from request
        data = request.get_json()

        # Check if 'input' is present in the JSON data
        if 'input' not in data:
            return jsonify({'error': 'Missing input data'}), 400

        # Convert the input data into a DataFrame
        # Ensure the input data is in the correct shape
        input_data = data['input']
        new_user_df = pd.DataFrame([input_data])  # Ensures input data is 2D

        # Preprocess the input data
        processed_data = preprocessor.transform(new_user_df)
        
        # Predict using the KMeans model
        prediction = kmeans.predict(processed_data)
        
        # Return the prediction as JSON
        return jsonify({'prediction': int(prediction[0])})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)


