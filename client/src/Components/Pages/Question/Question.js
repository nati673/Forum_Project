import React from "react";
import "./Question.css";
import profile from "../../../Images/User.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faUser,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";

  
const Question = ({ question, userName }) => {
  const styleyou = {
    color: "ornge",
    fontSize: "2em",
  };
  return (
    <div className="d-md-flex align-items-center cont-q justify-space-between">
      <div className="d-flex flex-md-column avatar-container">
        <FontAwesomeIcon className="iconuser" icon={faUser} />
        <h6 className="align-self-center ms-2 ms-md-0 text-center">
          {userName}
        </h6>
      </div>
      <div className="ms-md-5 flex-grow-1">
        <h6 className="pt-2 pt-md-0 text-start">{question}</h6>
      </div>
      <div className="d-none d-md-block ms-md-5">
  
        <FontAwesomeIcon style={styleyou} icon={faAnglesRight} />
      </div>
    </div>
  );
};

export default Question;
