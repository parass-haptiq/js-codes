import React from "react";

import "../styles.css";

export default function Card({ title, description }) {
  return (
    <div className="card-layout">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
}
