import React from 'react'
import SocialMedia from '../Social Media Icon/SocialMedia'
import './Footer.css'
import { Container, Box, Link, Grid } from '@mui/material'

const Footer = props => {
  return (
    <Box>
       <Container maxWidth={false} style={{background: '#FFF8F1', position:'absolute'}}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1} pt={3}>Sitemap</Box>
              <Box>
                <Link href="/" color="inherit">
                  Home
                </Link>
              </Box>
              <Box>
                <Link href="/about" color="inherit">
                  About
                </Link>
              </Box>
              <Box>
                <Link href="/projects" color="inherit">
                  Works
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1} pt={3}>Social Media</Box>
              <Box>
                <SocialMedia />
              </Box>
            </Grid>              
          </Grid>
          <Box textAlign="center" pt={{ xs: 3, sm: 1}} pb={{ xs: 3, sm: 0 }}>
            Made By Jordin &reg; {new Date().getFullYear()}
          </Box>
        </Container>
    </Box>
  )
}



export default Footer