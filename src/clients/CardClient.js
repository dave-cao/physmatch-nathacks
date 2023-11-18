import React from 'react'
import "./Cliendcrd.css"
import { useState } from 'react'
function CardClient(props) {
    const [opendescription, setopendescription] = useState(false)



    const toggleDetails = () => {
        setopendescription(!opendescription);
    };

    let content_car = 
        
        <div className="table-row">
        <div className="table-cell">
            <h3 className="card_car-title1">{props.extra_details[0]}</h3>
        </div>
        <div className="table-cell">
            <h3 className="card_car-title1">{props.extra_details[1]}</h3>
        </div>
        <div className="table-cell">
            <h3 className="card_car-title1">{props.extra_details[2]}</h3>
        </div>
        <div className="table-cell">
            <h3 className="card_car-title1">{props.extra_details[3]}</h3>
        </div>

    </div>
 



    let header = 
        <div className="table-row" >
        <div className="table-cell">
            <h3 className="card_car-title-h1">Age</h3>
        </div>
        <div className="table-cell">
            <h3 className="card_car-title-h1">Height</h3>
        </div>
        <div className="table-cell">
            <h3 className="card_car-title-h1">Weight</h3>
        </div>
        <div className="table-cell">
            <h3 className="card_car-title-h1">Bp </h3>
        </div>

        </div >


    return (<React.Fragment>

        <div className='table'>
            <div className="table-row">
                <div className="table-cell">
                    <div className="card_car-title">{props.name}</div>
                </div>
                <div className="table-cell">
                    <div className="card_car-text">{props.email}</div>
                </div>
                <div className="table-cell">
                    <div className="card_car-text">{props.phone}</div>
                </div>
                <div className="table-cell">
                    <div className="card_car-text">{props.next_apt}</div>
                </div>
                <div className="table-cell">
                    <button className="card_car-button2" onClick={toggleDetails}>View</button>

                </div>



            </div>

        </div>

        <div>{opendescription && (
            <div className='"table-row"'>
                <div className="dropdown">
                    {header}
                    {content_car}
                    <br />
                </div>
            </div>)}
        </div>
    </React.Fragment>

    )
}

export default CardClient