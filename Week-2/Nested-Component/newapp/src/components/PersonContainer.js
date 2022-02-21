import { Container, Row, Col } from "react-bootstrap";
import NavbarComp from "./Navbar";
import PersonDetail from "./PersonDetail";
import Children from "./Children";
import Friends from "./Friends";
import PersonData from "../data/PersonData.json";

function PersonContainer() {
  return (
    <div>
      <NavbarComp />
      {PersonData.map((person) => (
        <Container className="border border-primary">
          <Row md={4}>
            <Col><h1>Person Info</h1>
              <PersonDetail personInfo={person} />
            </Col>
            <Col xs={6}><h1>Childrens Info </h1>
              {person.children.map((child)=>(<Children childInfo={child}/>))}
            </Col>
            <Col> <h1>Friends Info</h1>
            {person.friends.map((child)=>(<Friends friendInfo={child}/>))}
            </Col>
          </Row>
        </Container>
      ))}
    </div>
  );
}

export default PersonContainer;
