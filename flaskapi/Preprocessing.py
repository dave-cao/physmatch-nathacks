import numpy as np
import pandas as pd
from scipy.signal import butter, filtfilt

def filter_eeg_df(df, sample_rate=250, lowcut=1, highcut=50):

    # Convert data from df to numpy array
    eeg_data = df.to_numpy()

    # Nyquist frequency
    nyq = 0.5 * sample_rate

    # Normalized cutoff frequencies
    low = lowcut / nyq
    high = highcut / nyq

    # Butterworth filter
    b, a = butter(N=2, Wn=[low, high], btype='band')

    # Apply the filter to each channel
    filtered_data = filtfilt(b, a, eeg_data, axis=0)

    # Convert filtered data back to df
    filtered_df = pd.DataFrame(filtered_data, columns=df.columns)

    return filtered_df
