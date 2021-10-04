import React, { useState } from 'react'

import Header from '../Header'

import { useTypewriter } from 'react-simple-typewriter'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { text } = useTypewriter({
    words: ['Hello', 'From', 'Typewri', 'Hook!'],
    loop: true // Infinit
  })
  return (
    <div className="mi-wrapper">
      <Header />
      <section id="home" className="hero-area bg_cover">
        <div className="container">
          <div className="row">
            <div className="mx-auto col-lg-9 col-xl-9 col-md-10">
              <div className="text-center hero-content">
                <h1 className="mb-30 wow fadeInUp" data-wow-delay=".2s">
                  Lorem ipsum, dolor sit amet {text}
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, laborum at. Iure assumenda unde corrupti reprehenderit
                  nulla
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      {children}
    </div>
  )
}

export default Layout
