import { Card } from "react-bootstrap";

export default function Friends({ friendInfo }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Title> Gender : {friendInfo.gender}</Card.Title>
      <Card.Title>Lastname: {friendInfo.firstName}</Card.Title>
      <Card.Title>Lastname: {friendInfo.lastName}</Card.Title>
      <Card.Title>phone: {friendInfo.phone}</Card.Title>
      <Card.Title>Adress: {friendInfo.address}</Card.Title>
      <Card.Title>City: {friendInfo.city}</Card.Title>
      <Card.Title>Birthday: {friendInfo.birthday}</Card.Title>
      <Card.Title>Language: {friendInfo.language}</Card.Title>
      <Card.Img variant="top" src={friendInfo.avatar} />
      <Card.Body>
        <Card.Title>Professions: {friendInfo.profession}</Card.Title>
        <Card.Title>Salary: {friendInfo.salary}</Card.Title>
      </Card.Body>
    </Card>
  );
}
