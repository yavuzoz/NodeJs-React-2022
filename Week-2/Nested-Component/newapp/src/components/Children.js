import { Card } from "react-bootstrap";

export default function Children({ childInfo }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Title> Gender : {childInfo.gender}</Card.Title>
      <Card.Title>Lastname: {childInfo.firstName}</Card.Title>
      <Card.Title>Lastname: {childInfo.lastName}</Card.Title>
      <Card.Img variant="top" src={childInfo.avatar} />
      <Card.Body>
        <Card.Title>Birtday: {childInfo.birthday}</Card.Title>
      </Card.Body>
    </Card>
  );
}
