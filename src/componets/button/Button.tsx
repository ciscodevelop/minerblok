// import { SavingsOutlined } from '@mui/icons-material'
import * as React from "react";
import * as Icons from "@mui/icons-material";
import "./button.scss";

const Button = ({ iconName, title,onClick ,styleBtn={},styleIcon={},disabled}: any) => {
  //console.log(Icons);

  const IconToRender = iconName
    ? React.createElement(Icons[iconName as keyof typeof Icons])
    : null;
  return (
    <div className="buttons" >
      <button onClick={onClick}style={styleBtn} disabled={disabled}>
       <i className="icon" style={styleIcon}>{IconToRender}</i> 
        <h6>{title}</h6>
      </button>
    </div>
  );
};

export default Button;
