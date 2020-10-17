import React,{useState} from 'react';
import { Toast,Row,Col,Button } from 'react-bootstrap';
const Notification = ({ show,setShow }) => {

  return (
    <Row>
      <Col md={{ span: 3, offset: 9 }}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header className="bg-success text-white">
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Nueva Orden</strong>
            <small>1 min ago</small>
          </Toast.Header>
          <Toast.Body>Acabas de recibir una nueva orden!</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
};

export default Notification;