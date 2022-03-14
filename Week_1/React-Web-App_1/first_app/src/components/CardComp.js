import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Image from "./img/sedan-3.jpg";

export default function CardComp({ cardInfo }) {
  return (
    <div class="container">
      <span>{cardInfo.name}</span>
      <span>{cardInfo.introductionDate}</span>
      <span>{cardInfo.description}</span>
      <span>{cardInfo.image}</span>
    </div>
  );
}
