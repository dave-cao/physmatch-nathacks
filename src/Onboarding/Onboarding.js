import React from 'react'
import OnboardCard from './OnboardCard'
import Onboardmapper from './Onboardmapper'
function Onboarding() {
  let clients = [
    {
      name: "Dvaid",
      email: "nwe.com",
      phone: "+1239123891238",
      requested: "10/09/2023",
      extra_details: ["19", "190cm", "90kg", "140/90"]

    }, {
      name: "Dvaid",
      email: "nwe.com",
      phone: "+1239123891238",
      requested: "10/09/2023",
      extra_details: ["19", "190cm", "90kg", "140/90"]

    }, {
      name: "Dvaid",
      email: "nwe.com",
      phone: "+1239123891238",
      requested: "10/09/2023",
      extra_details: ["19", "190cm", "90kg", "140/90"]

    }]
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        Your Next Meeting
      </h1>
      
      <Onboardmapper clients={clients}/></div>
  )
}

export default Onboarding