# Physmatch
v1.0

PhysMatch addresses a crucial need in Alberta’s healthcare system, connecting 650,000 residents without a family doctor to local physicians through an advanced technology-enhanced platform. 
Developed using the React JS framework, PhysMatch features an interactive map for locating physicians and managing appointments. A standout feature is the built-in emotion recognition tool, 
using the Muse headband to capture EEG data from patients during initial consultations. This data, from standard 10-10 system electrode locations TP9, AF7, AF8, and TP10, is processed using
a Random Forest algorithm. Our method applies statistical feature extraction for emotion recognition, achieving 97% accuracy across three emotional states (happy, neutral, sad) with a 50:50 
test-train split.

The journey in developing PhysMatch involved overcoming challenges such as accessing EEG datasets for emotion recognition and integrating the MUSE2 device's data with our web interface via 
Flask, alongside developing a robust authentication system.

This integration enhances healthcare by providing doctors with real-time insights into patients’ emotional states, fostering more informed and empathetic interactions. It represents a significant 
step in bridging the gap between medical expertise and personalized patient care.

Moving forward, PhysMatch plans to implement an in-house video chat feature, reducing reliance on external platforms like Zoom or Google Meets. Our focus also extends to continuous refinement of 
the user interface and overall experience, ensuring PhysMatch remains a cutting-edge solution in healthcare, meeting evolving needs for both patients and healthcare professionals in Alberta.
