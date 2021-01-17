import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import React, { useState } from 'react';


export default function App() {
  const [content, setContent] = useState('');

  const search = () => {
    window.location.href = `https://www.google.com/search?q=${content}+site%3Ahttps%3A%2F%2Fparkbot.ml`;
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">파크봇</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/docs">Docs</Nav.Link>
          <Nav.Link href="/#main">Invite</Nav.Link>
          <Nav.Link href="/premium">Premium</Nav.Link>
          <NavDropdown title="더보기" id="basic-nav-dropdown">
            <NavDropdown.Item href="/tos">Terms of Service</NavDropdown.Item>
            <NavDropdown.Item href="/privacy">Privacy</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/docs/sla">SLA</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" id="searchinput" placeholder="Search" className="mr-sm-2" value={content} onChange={e => setContent(e.target.value)} />
          <Button variant="outline-success" onClick={search}>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}