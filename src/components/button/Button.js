import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, icon}) {
  return (
    <div className={className}>
      <a className="main-button" href={href} target={newTab && "_blank"}>
        {icon && <span className="btn-icon">{icon}</span>}
        {text}
      </a>
    </div>
  );
}
