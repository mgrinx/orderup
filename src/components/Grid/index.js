import React from "react";
import "./style.css"

//materialize grid components

export function Container({ children }) {
  return <div className="container">{children}</div>;
}

export function Row({ className, children }) {
  return <div className={"row " + className}>{children}</div>;
}

//supports adding classes
export function Col({ className, children }) {
  return <div className={"col " + className}>{children}</div>;
}
