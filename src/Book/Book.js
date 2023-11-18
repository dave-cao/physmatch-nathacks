
import React from 'react'
import MapContainer from './MapContainer'
import Doctors from './Doctors'
import "./Maps.css"
function Book() {
  
  return (
    <div className='book-main' > 
      <MapContainer/>
      <div style={{padding:"10px", width:"100%"}}> 
        <Doctors />

      </div>
      </div>
  )
}

export default Book;
