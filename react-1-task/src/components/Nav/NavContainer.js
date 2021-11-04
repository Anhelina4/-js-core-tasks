import React from "react";
import Nav from "./Nav";
const navStyles={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
}
const NavContainer = () => {
   
  const navArr = [
    {
      title: "Events",
      link: "https://www.sydneyoperahouse.com/events/whats-on.html",
      id: "1",
    },
    {
      title: "Visit us",
      link: "https://www.sydneyoperahouse.com/visit-us.html",
      id: "2",
    },
    {
      title: "Digital",
      link: "https://www.sydneyoperahouse.com/digital.html",
      id: "3",
    },
    {
      title: "Our story",
      link: "https://www.sydneyoperahouse.com/our-story.html",
      id: "4",
    },
    {
      title: "Schools",
      link: "https://www.sydneyoperahouse.com/schools.html",
      id: "5",
    },
  ];
  return (
      <div style={navStyles}>
        {navArr.map((item) => {
          return (
            <Nav   key={item.id} href={item.link} name={item.title}/>
          );
        })}
      </div>    
  );
};

export default NavContainer;
