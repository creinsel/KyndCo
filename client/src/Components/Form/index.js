import React from "react";
import "./style.css";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (

    <button {...props} style={{ marginBottom: 10 }} className="add-act-btn">

      {props.children}
    </button>
  );
}

export function Select(props){
var cat =props.name;

if(cat ==="category"){
  return (
    <div className="form-group">
      <select className="form-control" {...props}>
  
    <option>{props.opt1}</option>
    <option>{props.opt2}</option>
    <option>{props.opt3}</option>

</select>
</div>
  )
  
} else{
    return (
      <div className="form-group">
        <select className="form-control" {...props}>
    
      <option>{props.opt1}</option>
      <option>{props.opt2}</option>
      <option>{props.opt3}</option>
      <option>{props.opt4}</option>
      <option>{props.opt5}</option>
    
      
      
    </select>
      </div>
    );
  };
    
}