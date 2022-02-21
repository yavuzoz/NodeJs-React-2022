import React, { Component } from "react";
import {ListGroup} from "react-bootstrap";

export default class FooterComp extends Component {
  render() {
    return (
      <div class="container-fluid bg-dark p-4 text-light">
        <ListGroup>
          CopyRight @ 2083
        </ListGroup>
      </div>
    );
  }
}
