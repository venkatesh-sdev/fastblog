import React, { Children } from 'react'
import {Header,Footer} from '../components'

const Layout = ({children}) => {
  return (
    <div className='overflow-x-hidden'>
    <div className=' top-0 fixed'><Header/></div>
    {children}
    <Footer/>
    </div>
  )
}

export default Layout