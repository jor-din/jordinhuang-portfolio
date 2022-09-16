import React from "react";
import AboutImg from "../../Assets/306532243_757755798654313_1945931525159402282_n.jpg";
import { Container, Grid, Box, Paper, Typography } from "@mui/material";
import InterestImg from "./InterestImg";

const About = () => {
  return (
    <Container
      maxWidth={false}
      className="about"
      style={{
        background:
          "linear-gradient(to bottom, #fff8f1, #fff9f7, #fffbfc, #fffdff, #ffffff)",
        overflow: "auto",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          p={5}
          spacing={2}
          justifyContent="center"
          className="about__who"
        >
          <Grid item xs={12} sm={12} md={4}>
            <img src={AboutImg} alt="img of jordin" height="400" />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <h2 style={{fontSize: '2rem'}}>Who am I?</h2>
            <p style={{fontSize: '1.3rem', textAlign: 'left', letterSpacing: '1.2'}}>
              I am a software engineer with a strong background in JavaScript, React, and a passion for web development. My focus as a
              software engineer is to make websites more accessible for
              consumers and improve valuable web traffic for businesses.
            </p>

            <p style={{fontSize: '1.3rem', textAlign: 'left', letterSpacing: '1.2'}}>
              As a software engineer, my goal to become a mentor to high students who are low-income first-gen students to help and inspire them to find their passion in STEM field.    
            </p>
          </Grid>
        </Grid>
        <Grid
          container
          p={5}
          spacing={2}
          justifyContent="center"
          className="about__why"
        >
          <Grid item xs={12} sm={12} md={4}>
            <h2 style={{fontSize: '2rem'}}>Why Software Engineer?</h2>
            <p style={{fontSize: '1.3rem', textAlign: 'left', letterSpacing: '1.2'}}>
              Before I found my interest in software engineering, I was a health
              science major at Boston University on track to becoming a nurse.
              During my last semester of Senior, I decided to take 'CS111:
              Introduction to Computer Science' out of curiosity. From that
              class, my admiration for technology and dedication to contributing
              to the groundbreaking industry became the reason why I decided to
              leave the healthcare path.
            </p>

            <p style={{fontSize: '1.3rem', textAlign: 'left'}}>
              Since then, I have tried every route to becoming a software
              engineer. Ranging from Udemy courses, Youtube, and even attending
              a semester at Oregon State University. I realized I needed an
              environment where I could practice effective teamwork and
              communication as a software engineer. So I took my chances and
              attended General Assembly - Software Engineer Immersive. Since
              August 2022, I have officially graduated from the program and have
              become more confident and motivated to continue learning and
              growing as an engineer.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <img src={AboutImg} alt="img of jordin" height="400" />
          </Grid>
        </Grid>
        <Grid
          container
          p={5}
          spacing={2}
          justifyContent="center"
          className="about__interest"
        >
          <Grid item xs={12} sm={12} md={8}>
            <h2>Things That I Enjoy</h2>
            <Paper sx={{ margin: 3, padding: 3 }}>
              <Typography textAlign="left">
                <strong>✈️ Travel: </strong>During college, I would save up all
                my money and travel during winter breaks and spring breaks.
                After my first international trip, I discovered my love for
                exploring and embracing different cultures and understanding
                different perspectives in life. Since then I have found great
                travel buddies to share precious moments and hope to travel more
                soon.
              </Typography>
            </Paper>
            <Paper sx={{ margin: 3, padding: 3 }}>
              <Typography textAlign="left">
                <strong>🥟 Food: </strong>Growing up, my parents have always
                told me food is one of life's greatest pleasures and stressed
                the importance of trying new foods. Now during the weekends, I
                love looking for new recipes to try out and share with family
                and friends. Recently I have been obsessed with using puff
                pastry to make tartlets and turnovers.
              </Typography>
            </Paper>
            <Paper sx={{ margin: 3, padding: 3 }}>
              <Typography textAlign="left">
                <strong>🌱 Houseplants: </strong>The obsession began during the
                COVID lockdown when I was only able to go to grocery stores and
                decided to buy one plant to liven up my room. One became two and
                two became too many, according to my friends. For me, I love its
                abilities to liven up not only the space, but my mood and
                creativity.
              </Typography>
            </Paper>
            <Paper sx={{ margin: 3, padding: 3 }}>
              <Typography textAlign="left">
                <strong>⌨️ Mechanical Keyboards: </strong>I have always loved
                building things myself, like my computer, most of my furniture
                and now keyboards. Recently I have fallen down the rabbit hole
                of custom mechanical keyboards. It started when I wanted to find
                keycaps for my keyboard, but then rapidly moved to building the
                keyboard itself.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container p={5} xs={12} sm={12} md={12} justifyContent="center">
          <InterestImg className="about__interest-img" />
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
