import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { logout } from '../../actions/userActions';

const TopNavbar = () => {
  const history= useHistory()
  const dispatch= useDispatch()
  

  const logoutHandler=()=>{
    dispatch(logout())
    history.push('/')

  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Modern Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">View Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                View Accounts
              </NavDropdown.Item>
              <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNavbar