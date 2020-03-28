import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function KyndList({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group list-group-horizontal">{children}</ul>
    </div>
  );
}

export function KyndListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
