import React from 'react'
import Doctorcard from './Doctorcard'

function Doctormapper(props) {
  return (
      <div>
          {props.doctors.map((doc, index) => (
            
              <Doctorcard
                  key={index}
                  name={doc.name}
                  years={doc.years}
                  location={doc.location}
                  description={doc.description}
                  
              />
          ))}
      </div>
  )
}

export default Doctormapper