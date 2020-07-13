import React from 'react'
import classnames from 'classnames'
import { Header, Footer } from 'baseComponents'

import './Page.scss'

export const Page = ({ children, className }) => {
  return (
    <div className={ classnames("page", className) }>
       
      <Header />
     
      {children}

      <Footer />
    </div>
  )
}