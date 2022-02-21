

import { useState } from "react";
import { NavDropdown } from "react-bootstrap";

export default function PersonDetail({ personInfo }) {
  let [result, setResult2]= useState('');
  let selectCategory = (e) => {
    setResult2(e.target.value + ' is selected');
  }
  return (
    <NavDropdown.Item   href="#action/3.1"
    >
      <option value={personInfo.id} onChange={selectCategory}>{personInfo.first_name}</option>
    </NavDropdown.Item>
  );

  }