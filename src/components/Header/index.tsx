import axios from 'axios'
import React, { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'

import ActiveLink from '../ActiveLink'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const LineIcon = dynamic(() => import('react-lineicons'), { ssr: false })

const Header = () => {
  const [information, setInformation] = useState({ brandImage: '' })
  const [navigationToggler, setNavigationToggler] = useState(false)

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler)
  }

  useEffect(() => {
    axios.get('/api/information').then((response) => {
      setInformation(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Prototipo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header
