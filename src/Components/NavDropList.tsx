import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import todo from '../assets/icon-todo.svg'
import calender from '../assets/icon-calendar.svg'
import reminder from '../assets/icon-reminders.svg'
import plan from '../assets/icon-planning.svg'
import './NavDropList.scss'

export const NavDropList = () => {
  return (
    
    <Navbar expand="lg" >
    <Container>
        <Nav className="droppy me-auto">
          <NavDropdown title="Features" id="basic-nav-dropdown" className='drip'>
            <NavDropdown.Item  className='ms-2' href="#action/3.1"><img src={todo}/> Todo List</NavDropdown.Item>
            <NavDropdown.Item  className='ms-2' href="#action/3.1"><img src={calender}/> Calender</NavDropdown.Item>
            <NavDropdown.Item  className='ms-2' href="#action/3.1"><img src={reminder}/> Reminders</NavDropdown.Item>
            <NavDropdown.Item  className='ms-2' href="#action/3.1"><img src={plan}/> About</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Company" id="basic-nav-dropdown">
           <Nav.Link href="#home"  className='ms-4'>History</Nav.Link>
           <Nav.Link href="#home"  className='ms-4'>Our Team</Nav.Link>
           <Nav.Link href="#home"  className='ms-4'>Blog</Nav.Link>
          </NavDropdown>
          <Nav.Link href="#home">Careers</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
        </Nav>
    </Container> 
    
  </Navbar>
  )
}
