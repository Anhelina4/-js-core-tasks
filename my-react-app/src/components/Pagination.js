import React, { useState } from "react"

const Pagination = props => {
  const [check, setCheck] = useState()
  const { material, limit } = props
  let countItems = Math.ceil(material / limit)
  const makeActive = e => {
    setCheck(e.target.innerHTML)
    console.log(e.target.innerHTML)
  }
  return (
    <nav aria-label="Page navigation example">
      <ul style={{ display: "flex", flexDirection: "reverse-row" }}>
      {check > 1 ?  (
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>) :null }
        
        {[...Array(countItems)].map((item, i) => (
          <li className="page-item" onClick={makeActive}>
            <a className="page-link" href="#">
              {i + 1}
            </a>
          </li>
        ))}
        { check < countItems ?  (
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>) :null }
      </ul>
    </nav>
  )
}

export default Pagination
