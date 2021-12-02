import {useNavigate} from "react-router-dom"
const All = () => {
    const history = useNavigate()
  return (
    <>
      <div>
         PageAll
      </div>
      <div onClick={()=>history("/today")}>link</div>
    </>
  )
}

export default All
