import React from 'react'
import AboutImg from '../../Assets/306532243_757755798654313_1945931525159402282_n.jpg'
import { Container, Grid, Box } from '@mui/material'

const About = () => {
  return (
    <Container component='section' maxWidth={false} className='about'>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="about__who">
        <Grid item xs={12} sm={4}>
        <img src={AboutImg} alt="img of jordin" height='400'/>
        </Grid>
        <Grid item xs={12} sm={4}>
        <h2>Who am I?</h2>
        <p>I am a software engineer with a strong background in JavaScript and React, and a passion for web development. </p>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="about__why">
        
        <Grid item xs={6}>
        <h2>Why Software Engineer?</h2>
        <p>Before I found my interest in software engineering, I was a health science major at Boston University on track to becoming a nurse. During my last semester of Senior, I decided to take 'CS111: Introduction to Computer Science' out of curiosity. From that class, my admiration for technology and dedication to contributing to the groundbreaking industry became the reason why I decided to leave the healthcare path. 
        </p>
        
        <p>
        Since then, I have tried every route to becoming a software engineer. Ranging from Udemy courses, Youtube, and even attending a semester at Oregon State University. I realized I needed an environment where I could practice effective teamwork and communication as a software engineer. So I took my chances and attended General Assembly - Software Engineer Immersive. Since August 2022, I have officially graduated from the program and have become more confident and motivated to continue learning and growing as an engineer. 
        </p>
        </Grid>
        <Grid item xs={4}>
        <img src={AboutImg} alt="img of jordin" height='600'/>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="about__why">
        
        <Grid item xs={8}>
        <h2>Things That I Enjoy</h2>
        <ul>
          <li>Traveling</li>
          <li>Food</li>
          <li>Houseplants</li>
          <li>Mechanical Keyboards</li>
          <li></li>
        </ul>
        </Grid>
        <Grid item xs={4}>
        <img src={AboutImg} alt="img of jordin" height='600'/>
        </Grid>
      </Grid>
      </Box>
    </Container>
  )
}

export default About