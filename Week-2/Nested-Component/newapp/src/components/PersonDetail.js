
import { Card } from "react-bootstrap";


export default function PersonDetail({ personInfo }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={personInfo.avatar} />
      <Card.Body>
        <Card.Title> Name : {personInfo.first_name}</Card.Title>
        <Card.Title>Lastname: {personInfo.last_name}</Card.Title>
        <Card.Title>Email: {personInfo.email}</Card.Title>
        <Card.Title>Gender: {personInfo.gender}</Card.Title>
        <Card.Title>Adresse: {personInfo.address}</Card.Title>
      </Card.Body>
    </Card>
  );
}
