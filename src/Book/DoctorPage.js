import { useParams } from "react-router-dom"


function DoctorPage() {

  const { id } = useParams()

  return (
    <div>Doctor Profile Page {id}</div>
  )
}

export default DoctorPage
