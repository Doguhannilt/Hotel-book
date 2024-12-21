import React from 'react'
import Dou from '../Images/dou.jpg'

import Info_Prefer from './Info_Prefer'
import ContactUs from './ContactUs'
import MainInfo from './MainInfo'
import AboutUs from './AboutUs'

const Info = () => {
  return (
    <div>
      <div className='pl-60 pr-80 font-medium'>
        <AboutUs />
        <ContactUs />
      </div>
    </div>
  )
}

export default Info
