import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function KyndList({ children }) {
  return (
  <div className="list-overflow-container kyndline-container">
    <ul className="list-group list-group-flush">{children}</ul>
  </div>
  )
};

export function KyndListItem({ children }) {
  return  (

  <li className="list-group-item">
    <img src="./assets/images/check.png" className="check"></img>
    {children}</li>
  )
};