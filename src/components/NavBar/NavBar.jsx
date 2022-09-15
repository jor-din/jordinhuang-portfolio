import React from "react";
import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from '@mui/material/Link'


const NavBar = () => {
  return (
    <header className="navbar">
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" style={{background: '#FFF8F1', height: '7vh'}} >
          <Toolbar className="nav-buttons">            
            <Link className='nav-link' underline="none" style={{color:'#8B72BE', fontSize: '1.5rem'}} href="/">
              Home
            </Link>
            <Link className='nav-link' underline="none" style={{color:'#8B72BE', fontSize: '1.5rem'}} href="/about">
              About
            </Link>
            <Link className='nav-link' underline="none" style={{color:'#8B72BE', fontSize: '1.5rem'}} href="/projects">
              Works
            </Link>
            <Link className='nav-link' underline="none" style={{color:'#8B72BE', fontSize: '1.5rem'}} href="/resume">
              Resume
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};

export default NavBar;
