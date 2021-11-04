import React from "react";
import Alert from "../Alert/Alert";
import Btn from "../Btn/Btn";
import Card from "../Card/Card";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import Title from "../Title/Title";
import Input from "../Input/Input";
import Rating from "../Rating/Rating";
const breadArr = [
  {
    label: "breadcrumb",
    clas: "breadcrumb",
    classLink: "breadcrumb-item active",
    ariaCurrent: "page",
  },
  {
    label: "breadcrumb",
    clas: "breadcrumb",
    classLink: "breadcrumb-item",
    ariaCurrent: "page",
  },
];
const tags = [
  {
    title: "Tag 1 ",
    href: "http://link1.ru",
    clas: "tag",
  },
  {
    title: "Tag 2 ",
    href: "http://link2.ru",
    clas: "tag",
  },
  {
    title: "Tag 1 ",
    href: "http://link2.ru",
    clas: "tag",
  },
];
const Content = (event) => {
  return (
    <div>
      <Alert value="This is button" classes="alert-success" />
      <Btn
        getType="btn"
        classes="btn btn-danger"
        type="submit"
        value="Button"
      />
      <Btn
        getType="link"
        classes="btn btn-danger"
        value="Link"
        href="google.com"
      />
      <Card
        cardClass="card"
        imgClass="card-img-top"
        bodyClass="card-body"
        titleClass="card-title"
        title="Name of Title"
        textClass="card-text"
        text="Some quick example text to build on the card title and make up the
             bulk of the card's content."
        href="google.com"
        linkClass="btn btn-primary"
      />
      <div>
        {breadArr.map((item) => (
          <BreadCrumb
            label={item.label}
            clas={item.class}
            classLink={item.classLink}
            ariaCurrent={item.ariaCurrent}
          />
        ))}
      </div>
      <Title tag="h3" text="this is title" fontsize="30px" fontcol="red" />
      <Input type="text" placeholder="enter smth" value={event.target} />
      <div>
        <Rating />
      </div>
      <div className="tags are-large">
        {tags.map((item) => {
          return <div className={item.clas}>{item.title}</div>;
        })}
      </div>
    </div>
  );
};

export default Content;
