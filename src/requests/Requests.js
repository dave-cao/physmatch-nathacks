// Requests.js

import React from 'react';
import './inforcard.css';


const userInfo = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '555-555-5555',
    appointmentTime: 'November 21, 2023, 2:00 PM',
    profilePic: 'tom.png',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '555-123-4567',
    appointmentTime: 'December 5, 2023, 3:30 PM',
    profilePic: 'tom.png',
  },
  {
    name: 'Jai Ohri',
    email: 'ohirjai2003@gmail.com',
    phone: '123-456-7890',
    appointmentTime: 'December 25, 2023, 4:00 PM',
    profilePic: 'tom.png',
  },
];

function Requests() {
  return (
    <div>
      {userInfo.map((user, index) => (
        <div className="information-card" key={index}>
          <div class="profile-pic"><img src={('./tom.jpg')}alt='picture here' /></div>
          <div className="name">
            <strong>{user.name}</strong>
          </div>
          <div className="field">
            <strong>Email:</strong> {user.email}
          </div>
          <div className="field">
            <strong>Phone:</strong> {user.phone}
          </div>
          <div className="field">
            <strong>Next Appointment:</strong> {user.appointmentTime}
          </div>
          <div className="buttons">
            <button className="accept-button">Accept</button>
            <button className="change-appointment-button" >Change Appointment</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Requests;