import React from "react";

const BreadCrumb = (props) => {
    const {label, clas, classLink, ariaCurrent} = props
  return (
    <>
      <nav aria-label={label}>
        <ol className={clas}>
          <li className={classLink} aria-current={ariaCurrent}>
            Home
          </li>
        </ol>
      </nav>
    </>
  );
};

export default BreadCrumb;
