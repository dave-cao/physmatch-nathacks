import numpy as np
import pandas as pd
from mne import create_info
from mne.io import RawArray
from mne.filter import filter_data
from mne.preprocessing import ICA
from time import sleep
import sys

import mne
import pandas as pd
import numpy as np
import re

def tail(filename, n=10):
    with open(filename, 'r') as file:
        # Read the last n lines from the file
        lines = file.readlines()[-n:]
    return lines

def load_and_filter_csv(file_path, output_file_path, num_lines=1000, polling_interval=1):
    # Open the output file for writing the header

    while True:
        # Get the last few lines of the CSV file
        last_lines = tail(file_path, num_lines)

        # Process the last lines
        print(last_lines[len(last_lines) - 1])

        # Open the output file for appending and write the last lines
        with open(output_file_path, 'w') as output_file:
            output_file.write("Timestamp,TP9,AF7,AF8,TP10,Right AUX\n")
            output_file.writelines(last_lines)

        # Wait for the specified interval before checking again
        sleep(polling_interval)



# Example usage:
if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python script.py <csv_file_path> <output_file_path>")
        sys.exit(1)
    csv_file_path = sys.argv[1]
    output_file_path = sys.argv[2]
    load_and_filter_csv(csv_file_path, output_file_path)
