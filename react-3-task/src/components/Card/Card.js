import React from "react";

const Card = (props) => {
  const { cardClass, href, textClass, text, linkClass,title, imgClass, bodyClass, titleClass } = props;
  return (
    <div className={cardClass} style={{width: "18rem"}}>
      <img src="..." classNAme={imgClass} alt="..." />
      <div className={bodyClass}>
        <h5 className={titleClass}>{title}</h5>
        <p classNAme={textClass}>
          {text}
        </p>
        <a href={href} classNAme={linkClass}>
          Переход куда-нибудь
        </a>
      </div>
    </div>
  );
};

export default Card;
