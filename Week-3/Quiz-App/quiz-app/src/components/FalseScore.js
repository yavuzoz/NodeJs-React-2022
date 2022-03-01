import React from "react";

function FalseScore({falseScore}) {
  return (
    <ul class="navbar">
      <li class="dropdown-item bg-danger m-1 p-2 w-50"> False Score : {falseScore}</li>
    </ul>
  );
}

export default FalseScore;
