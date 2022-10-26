import React from "react";
import "./FormList.css";
const FormList = (props) => {
  return (
      <div className="container">
        <div className="head">
          <h6>{props.post.title}</h6>
          <span className="id">{props.post.id}</span>
        </div>
        <div className="text">text</div>
        <img src={props.post.url} alt="text" />
      </div>
  );
};

export default FormList;
