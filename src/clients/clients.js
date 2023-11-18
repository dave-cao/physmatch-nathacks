import React from 'react'
import Requestin from './Requestin'

function Clients() {
  let clients=[
    {
    name:"Dvaid",
    email:"nwe.com",
    phone:"+1239123891238",
    next_apt:"10/09/2023",
      extra_details:["19","190cm","90kg","140/90"]

    }, {
      name: "Dvaid",
      email: "nwe.com",
      phone: "+1239123891238",
      next_apt: "10/09/2023",
      extra_details: ["19", "190cm", "90kg", "140/90"]

    }, {
      name: "Dvaid",
      email: "nwe.com",
      phone: "+1239123891238",
      next_apt: "10/09/2023",
      extra_details: ["19", "190cm", "90kg", "140/90"]

    }]
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        Clients
      </h1>
      <div>
        <div className='table'>
          <div className="table-row">
            <div className="table-cell">
              <div className="card_car-title-h">Name</div>
            </div>
            <div className="table-cell">
              <div className="card_car-text-h">Email</div>
            </div>
            <div className="table-cell">
              <div className="card_car-text-h">Phone</div>
            </div>
            <div className="table-cell">
              <div className="card_car-text-h">Last Seen</div>
            </div>
            <div className="table-cell">
              <div className="card_car-text-h"></div>
            </div>
          </div>
        </div>
        <Requestin clients={clients} />
      </div>
    </div>
  )
}

export default Clients
