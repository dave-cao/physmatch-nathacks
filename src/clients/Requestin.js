import React from 'react'
import CardClient from './CardClient'
function Requestin(props) {
    return (
        <div className="card_car-grid"  >
            {props.clients.map((i, index) => (
                <div className="card_car-list-item" key={index}>
                    <CardClient
                        name={i.name}
                        email={i.email}
                        phone={i.phone}
                        next_apt={i.next_apt}
                        extra_details={i.extra_details}
                    />
                </div>

            ))}
        </div>
    )
}

export default Requestin