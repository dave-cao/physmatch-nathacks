from flask import Flask, jsonify
import pandas as pd
from joblib import load
import numpy as np
from flask_cors import CORS
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
# Load the model outside of the route decorator to load it only once when the app starts
try:
    rf = load('./randomforest50.joblib')
except Exception as e:
    print("An error occurred:", e)

# Function to make predictions
def make_a_pred(tabled_data):
    pred = rf.predict(tabled_data)
    return pred
    
def bunch_clean_data_by_second(csv_file):
    
    datanew = pd.read_csv(csv_file, index_col=0)

    # Convert 'timestamps' column to datetime
    datanew.index = pd.to_datetime(datanew.index, unit='s')

    # Resample the data into 1-second blocks and calculate the mean
    resampled_data = datanew.resample('1S').mean()
    new_column_names = ['# mean_0_a ','mean_1_a','mean_2_a','mean_3_a','mean_4_a']  

    if len(new_column_names) == len(resampled_data.columns):
        resampled_data.columns = new_column_names
    else:
        print("Number of new column names doesn't match the number of columns in the data.")

    # Remove the first and last columns
    if len(resampled_data.columns) >= 2:
        resampled_data = resampled_data.iloc[:, 0:-1]
    else:
        print("Not enough columns to remove first and last columns.")
    # Print the resampled data for inspection
    resampled_data.reset_index(drop=True, inplace=True)
    return resampled_data




@app.route('/')
def hello_world():

    # give this func a csv and should work
    stuff=bunch_clean_data_by_second("./test.csv")

    stuff.set_index(stuff.columns[0], inplace=True)
    # Make predictions using the loaded model
    x = make_a_pred(stuff)

    print(stuff)
    print("Everything is working!")
    
    # Return predictions as JSON
    return jsonify({'predictions': x.tolist()})

if __name__ == "__main__":
    app.run(debug=True)
