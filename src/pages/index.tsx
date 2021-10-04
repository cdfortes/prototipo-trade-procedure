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
      <div className="search-area">
        <div className="container">
          <div className="search-wrapper">
            <form action="#">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-5 col-10">
                  <div className="search-input">
                    <label htmlFor="type">
                      <i className="lni lni-tag theme-color"></i>
                    </label>
                    <select name="type" id="type">
                      <option value="none" selected disabled>
                        Would you like to export, import or transit?
                      </option>
                      <option value="none">Export</option>
                      <option value="none">Import</option>
                      <option value="none">Transit</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-5 col-10">
                  <div className="search-input">
                    <label htmlFor="category">
                      <i className="lni lni-grid-alt theme-color"></i>
                    </label>
                    <select name="category" id="category">
                      <option value="none" selected disabled>
                        Categories
                      </option>
                      <option value="none">Vehicle</option>
                      <option value="none">Electronics</option>
                      <option value="none">Mobiles</option>
                      <option value="none">Furniture</option>
                      <option value="none">Fashion</option>
                      <option value="none">Jobs</option>
                      <option value="none">Real Estate</option>
                      <option value="none">Animals</option>
                      <option value="none">Education</option>
                      <option value="none">Matrimony</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-5 col-10">
                  <div className="search-input">
                    <label htmlFor="location">
                      <i className="lni lni-map-marker theme-color"></i>
                    </label>
                    <select name="location" id="location">
                      <option value="none" selected disabled>
                        Locations
                      </option>
                      <option value="none">New York</option>
                      <option value="none">California</option>
                      <option value="none">Washington</option>
                      <option value="none">Birmingham</option>
                      <option value="none">Chicago</option>
                      <option value="none">Phoenix</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-5 col-10">
                  <div className="search-btn">
                    <button className="main-btn btn-hover">
                      Search <i className="lni lni-search-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
