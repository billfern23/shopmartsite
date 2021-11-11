import React from "react";
import { MdArrowBackIos } from "react-icons/md";
const Previousbutn = (props) => {
  return (
    <div className={props.className} onClick={props.onClick}>
      <MdArrowBackIos style={{ color: "red", fontSize: "50px" }} />
    </div>
  );
};

export default Previousbutn;
