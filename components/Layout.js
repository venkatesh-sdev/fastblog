import React, { Children } from 'react'
import {Header,Footer} from '../components'

const Layout = ({children}) => {
  return (
    <div className='overflow-x-hidden'>
    <Header/>
    {children}
    <Footer/>
    </div>
  )
}

export default Layout