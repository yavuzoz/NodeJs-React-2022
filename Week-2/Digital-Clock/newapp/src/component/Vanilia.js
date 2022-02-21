import React from "react";

function Vanilia() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let secondes = date.getSeconds();

  if (+hours <= 9) {
    hours = "0" + hours;
  } else if (+minutes <= 9) {
    minutes = "0" + minutes;
  } else if (+secondes <= 9) {
    secondes = "0" + secondes;
  }
  return <div>Clock:{hours}:{minutes}:{secondes}</div>;
}

export default Vanilia;
