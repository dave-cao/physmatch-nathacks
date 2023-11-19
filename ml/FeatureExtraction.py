# File containing functions preforming feature extraction

#imports
import pandas as pd

# Input file you want to process
csv_file_path = "EEG_recording_2023-11-17-23.47.00.csv"

# Read CSV and remove necessary channels from muse data
df = pd.read_csv(csv_file_path)
data = df.drop(['timestamps', 'Right AUX'],axis = 1)

sample_frequency = 250
# Parameters for the sliding window
window_size = int(sample_frequency * 1) # seconds
step_size = int(sample_frequency * 0.5 ) # seconds, for 50% overlap

# This function moves through the data in chunks of window_size and create the next chunk with an overlap of step_size
# it then call the feature function to preform
def sliding_window(dataframe, window_size, step_size, function, *args, **kwargs):
    result = []
    start = 0
    while start < len(dataframe):
        end = start + window_size
        window = dataframe.iloc[start:end]
        if len(window) == window_size:
            result.append(function(window, *args, **kwargs))
        start += step_size
    return pd.DataFrame(result)

def mean(window):
    return window.mean()

def std(window):
    return window.std()

def skew(window):
    return window.skew()

def kurt(window):
    result = []
    for i in window.columns:
        win_col = window[:][i]
        result.append(win_col.kurt())
    return result

def min(window):
    min= []
    for i in window.columns:
        win_col = window[:][i]
        min.append(win_col.min())
    return min

def max(window):
    max = []
    for i in window.columns:
        win_col = window[:][i]
        max.append(win_col.max())
    return max 

# def derivative(window): 
#     sub_window_size = len(window) // 2
#     result = []
#     for i in window.columns:    
#         win_1_mean = window[0:sub_window_size][i].mean()
#         win_2_mean = window[sub_window_size:][i].mean()
#         result.append((win_1_mean-win_2_mean)/2)
#     return result

feat_mean = sliding_window(data,window_size,step_size,mean)
feat_std = sliding_window(data,window_size,step_size,std)
feat_skew = sliding_window(data,window_size,step_size,skew)
feat_kurt = sliding_window(data,window_size,step_size,kurt)
feat_min = sliding_window(data,window_size,step_size,min)
feat_max = sliding_window(data,window_size,step_size,max)
#feat_derivative = sliding_window(data,window_size,step_size,derivative)


features = pd.concat([feat_mean,feat_std,feat_skew,feat_kurt,feat_max,feat_min], axis =1).dropna() #,feat_derivative

#features.to_csv('')