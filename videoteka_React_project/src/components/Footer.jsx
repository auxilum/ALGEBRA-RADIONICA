import React from 'react'
import Facebook from './Facebook'
import Instagram from './Instagram'
import Twitter from './Twitter'


function Footer() {
  return (
    <>
    <div className='Footer'>
    <p>Zapratite nas:</p>
    <div className='footerContainer'>
        <Facebook />
        <Instagram />
        <Twitter />
    </div>
    </div>
    </>
    
  )
}

export default Footer 