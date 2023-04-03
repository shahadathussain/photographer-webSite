import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Teem = ({ teem }) => {
  const { name, img, body } = teem;
  return (
    <Col className="d-flex justify-content-around">
      <Card className="text-center" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p className="card-text">{body.slice(0, 55)}.</p>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Teem;
