import React from 'react'
import SocialMedia from '../Social Media Icon/SocialMedia'
import './Footer.css'
import { BottomNavigation, Box } from '@mui/material'

const Footer = props => {
  return (
    <Box>
       <BottomNavigation className='footer' style={{height:'5vh'}}>
        <SocialMedia />
        <div className='footer__copywrite'>
          <p>© 2021 Jordin Huang</p>
        </div>
    </BottomNavigation>
    </Box>
  )
}



export default Footer