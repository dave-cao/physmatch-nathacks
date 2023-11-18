import React from 'react'
import "./Maps.css"
import { useState } from 'react'
import Modal from "../shared/UIelemets/Modal"
import MainForm from '../clientsform/mainform'

function Doctorcard(props) {
    const [opendescription, setopendescription] = useState(false)
    const openDesc = () => setopendescription(true);
    const closeDesc = () => setopendescription(false);

    const [openform, setopenform] = useState(false)
    const openForm = () => setopenform(true);
    const closeform = () => setopenform(false);
    const Sendtobackend=()=>{
        console.log("backkkkkkkk");
        setopenform(false);
    }


    const foot2= <div style={{display:"flex" ,justifyContent:'space-between'}}>
    <button className="doc-button" onClick={closeform}>Close</button>
    <button className="doc-button" onClick={Sendtobackend}>Send</button>
    </div>
    /*book an pointment is here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
    const Bookapt=()=>{
        console.log("bookin");
        setopendescription(false);
        openForm(true)
        
    }
    /*book an pointment is here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

    const content_book = <Modal
        show={openform}
        onCancel={closeform}
        header="Send a request"
        footer={foot2}
    >

        <div className='modal-content'>

            
       <MainForm/>
            
        </div>
    </Modal>

    const foot= <div style={{display:"flex" ,justifyContent:'space-between'}}>
        <button className="doc-button" onClick={closeDesc}>Close</button>
        <button className="doc-button" onClick={Bookapt}>Book a meet</button>
    </div>
    const content = <Modal
        show={opendescription}
        onCancel={closeDesc}
        header={props.name}
        footer={foot}
    >

        <div className='modal-content'>

            
            {props.description}
            
        </div>
    </Modal>
  return (
      <div className='container'>
          {opendescription && content}
          {openform &&content_book}

          <button className='custom-button' onClick={openDesc}>
              <div className='content'>
                  <h3>Doctor : {props.name}</h3>
                  <p>Years: {props.years}</p>
              </div>
          </button>
      </div>
  )
}

export default Doctorcard