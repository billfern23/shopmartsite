import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
//My custom made forward button.
const Nextbtn = (props) => {
  return (
    <div className={props.className} onClick={props.onClick}>
      <MdArrowForwardIos style={{ color: "red", fontSize: "50px" }} />
    </div>
  );
};

export default Nextbtn;
