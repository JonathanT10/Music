import React from 'react';
import Nav from 'react-bootstrap/Nav';
import "./navBar.css";


function navB() {
    return(
    <Nav activeKey="/home">
    <Nav.Item className="nav">
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item className="nav">
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
  </Nav>
    )
}



export default navB;