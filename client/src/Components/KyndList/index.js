import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function KyndList({ children }) {
  return <ul className="list-group list-group-flush">{children}</ul>;
}

export function KyndListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
