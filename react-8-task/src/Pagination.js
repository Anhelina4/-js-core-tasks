import React from "react";

const Pagination = (props) => {
    const {material, limit} = props
    let countItems=Math.ceil(material/limit)
  return (
    <nav aria-label="Page navigation example">
        <ul  style={{display:"flex", flexDirection: "reverse-row"}}>
       <li className="page-item"><a className="page-link" href="#">Previous</a></li>
       {[...Array(countItems)].map((item, i)=><li className="page-item"><a className="page-link" href="#">{i+1}</a></li> )}
       <li className="page-item"><a className="page-link" href="#">Next</a></li>
       </ul>
    </nav>
  );
};

export default Pagination;
