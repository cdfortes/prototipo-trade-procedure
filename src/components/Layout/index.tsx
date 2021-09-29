import React, { useState } from 'react'

import Header from '../Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mi-wrapper">
      <Header />
      {children}
    </div>
  )
}

export default Layout
