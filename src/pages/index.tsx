import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from 'components/Layout'
import Socialicons from 'components/Socialicons'
import Main from 'components/Main'
import { Row, Col, Form, FloatingLabel } from 'react-bootstrap'

export default function Home() {
  const [information, setInformation] = useState('')
  /*  const paramConfig = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false
        }
      },
      color: {
        value: '#ffffff'
      },
      opacity: {
        value: 0.1
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: 'top',
        out_mode: 'out'
      }
    }
  }

  const paramConfigLight = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false
        }
      },
      color: {
        value: '#fff'
      },
      opacity: {
        value: 0.1
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: 'top',
        out_mode: 'out'
      }
    }
  } */
  useEffect(() => {
    axios.get('/api/information').then((response) => {
      setInformation(response.data)
    })
  }, [])

  return (
    <Layout>
      <div className="mi-home-area mi-padding-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <Row className="g-2">
                  <Col md>
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Email address"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="Works with selects"
                    >
                      <Form.Select aria-label="Floating label select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
