import React from "react";
import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from '@mui/material/Link'
import {slide as Menu} from 'react-burger-menu'

const NavBar = () => {
  return (
    <header className="navbar">
      <Box sx={{ flexGrow: 1}} className='inline-nav'>
        <AppBar position="static" style={{background: '#FFF8F1', height: '7vh'}} >
          <Toolbar variant='dense' className="nav-buttons">            
            <Link className='nav-link' underline="none" style={{color:'#8B72BE', fontSize: '1.5rem'}} href="/">
              Home
            </Link>
            <Link className='nav-link' underline="none" style={{color:'#8B72BE', fontSize: '1.5rem'}} href="/about">
              About
            </Link>
            <Link className='nav-link' underline="none" style={{color:'#8B72BE', fontSize: '1.5rem'}} href="/projects">
              Works
            </Link>
            <Link className='nav-link' underline="none" style={{color:'#8B72BE', fontSize: '1.5rem'}} href='https://docs.google.com/document/d/11kDx6b9d6JmSWjUq1MRRr2nLYMHx7Y0yPMjM8dVmd6U/edit?usp=sharing' target='_blank' rel='noopener noreferrer'>
              Resume
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Menu className="mobile-nav" noOverlay>
        <a className="menu-item" href="/">Home</a>
        <a className="menu-item" href="/about">About</a>
        <a className="menu-item" href="/projects">Works</a>
        <a className="menu-item" href='https://docs.google.com/document/d/11kDx6b9d6JmSWjUq1MRRr2nLYMHx7Y0yPMjM8dVmd6U/edit?usp=sharing' target='_blank' rel='noopener noreferrer'>Resume</a>
      </Menu>
    </header>
  );
};

export default NavBar;
