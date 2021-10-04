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
    <header className="header_area">
      <div id="header_navbar" className="header_navbar">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-xl-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="">
                  <img id="logo" src="" alt="Logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav">
                    <li className="nav-item">
                      <a className="page-scroll active" href="index">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="page-scroll"
                        data-toggle="collapse"
                        data-target="#sub-nav1"
                        aria-controls="sub-nav1"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        href="javascript:void(0)"
                      >
                        Pages
                        <div className="sub-nav-toggler">
                          <span></span>
                        </div>
                      </a>
                      <ul className="sub-menu collapse" id="sub-nav1">
                        <li>
                          <a href="">About</a>
                        </li>
                        <li>
                          <a href="">Service</a>
                        </li>
                        <li>
                          <a href="">Category List</a>
                        </li>
                        <li>
                          <a href="">Category Grid</a>
                        </li>
                        <li>
                          <a href="">Pricing</a>
                        </li>
                        <li>
                          <a href="">Accordions</a>
                        </li>
                        <li>
                          <a href="">Product Details</a>
                        </li>
                        <li>
                          <a href="">Login</a>
                        </li>
                        <li>
                          <a href="">Sign Up</a>
                        </li>
                        <li>
                          <a href="">404 Page</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="page-scroll"
                        data-toggle="collapse"
                        data-target="#sub-nav"
                        aria-controls="sub-nav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        href="javascript:void(0)"
                      >
                        Category
                        <div className="sub-nav-toggler">
                          <span></span>
                        </div>
                      </a>
                      <ul className="sub-menu collapse" id="sub-nav">
                        <li>
                          <a href="category">Category Grid</a>
                        </li>
                        <li>
                          <a href="category-list">Category List</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="product-details">
                        Product Details
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
